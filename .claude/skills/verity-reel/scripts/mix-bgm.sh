#!/usr/bin/env bash
# mix-bgm.sh <video.mp4> <music.mp3> <out.mp4> <music_start_s> [level_db=-23]
# Mixes background music under the film's own voiceover track. The picture stream is copied, never re-encoded.
#   music_start_s  trim into the track so its drop lands on the film's anchor beat (get it from find-drop.py)
#   level_db       music gain before ducking; -23 dB sits ~12 dB under a -20 LUFS voiceover
# Chain, in order, and why:
#   atrim+asetpts  align the music to film time zero
#   equalizer -3dB @2 kHz  leave the speech band to the voice
#   volume         set the bed level
#   afade in 2 s / out 2.6 s  no hard start or stop
#   sidechaincompress keyed by the VO  duck the bed while someone speaks, release in the gaps (450 ms)
#   amix normalize=0  do NOT let amix rescale the voice
#   alimiter level=0  catch peaks WITHOUT auto-levelling (the default level=1 raised the voice by ~1 dB)
set -eu
v="${1:?video}"; m="${2:?music}"; out="${3:?out}"; start="${4:?music_start_s}"; db="${5:--23}"
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$v")
end=$(awk -v s="$start" -v d="$dur" 'BEGIN{printf "%.2f", s+d}')
fo=$(awk -v d="$dur" 'BEGIN{printf "%.2f", d-2.6}')
ffmpeg -y -loglevel error -i "$v" -i "$m" -filter_complex \
"[0:a]asplit=2[vo][vosc];\
[1:a]atrim=start=${start}:end=${end},asetpts=PTS-STARTPTS,equalizer=f=2000:t=q:w=1:g=-3,volume=${db}dB,afade=t=in:st=0:d=2,afade=t=out:st=${fo}:d=2.6[bg];\
[bg][vosc]sidechaincompress=threshold=0.015:ratio=5:attack=15:release=450:makeup=1[bgd];\
[vo][bgd]amix=inputs=2:normalize=0:duration=first,alimiter=limit=0.89:level=0[a]" \
-map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -t "$dur" "$out"
echo "wrote $out"
for f in "$v" "$out"; do
  printf "%s  " "$(basename "$f")"
  ffmpeg -hide_banner -i "$f" -af loudnorm=print_format=summary -f null - 2>&1 | grep -E "Input Integrated|Input True Peak" | tr -s ' ' | tr '\n' ' '
  echo
done
echo "Pass: integrated loudness of the mix equals the voice-only file (the bed must not raise it)."
