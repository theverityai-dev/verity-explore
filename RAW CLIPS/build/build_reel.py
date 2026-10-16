"""Reel builder: narrator clips + MGV -> 1080x1920 30fps edit with word-synced captions.

Run:  uv run python build_reel.py <words_dir> <out_dir>
words_dir holds N.json word timings (faster-whisper) for clips 1..15.
Layouts: N = narrator full 9:16, M = mgv full 9:16, S = mgv top half / narrator bottom half.
"""
import json
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

RAW = Path("D:/Code/verity-explore/RAW CLIPS")
WORDS = Path(sys.argv[1])
OUT = Path(sys.argv[2])
BS = chr(92)  # ASS override-tag backslash
CAP_Y = 1800  # one fixed caption position: below the narrator's face and below every MGV layout
FPS = 30
GAP = 0.50          # inter-word gap above this is tightened (fewer jump cuts)
KEEP = 0.15         # speech kept either side of a tightened gap
FACES = json.load(open(sys.argv[3]))  # track_faces.py output

# beats: (first_word_index, layout, mgv_start_seconds, mgv_cap_seconds)
# An MGV shot plays forward from its start and returns to the narrator at its cap, so no MGV scene is shown twice.
BEATS = {
    1: [(0, "N", 0, 0), (8, "S", 0.0, 2.0), (12, "M", 2.0, 4.0)],
    2: [(0, "M", 6.0, 8.0), (5, "N", 0, 0), (11, "S", 8.0, 10.0), (18, "N", 0, 0), (25, "M", 10.0, 12.0)],
    3: [(0, "N", 0, 0), (6, "M", 12.0, 14.0), (9, "S", 16.0, 18.0), (16, "N", 0, 0), (19, "M", 18.0, 20.0)],
    4: [(0, "N", 0, 0), (3, "M", 22.0, 24.0), (7, "S", 24.0, 26.0), (19, "M", 28.0, 30.0)],
    5: [(0, "N", 0, 0), (3, "M", 30.0, 32.0), (8, "S", 32.0, 34.0), (14, "M", 34.0, 36.0), (20, "N", 0, 0),
        (28, "S", 36.0, 38.0)],
    6: [(0, "N", 0, 0), (7, "M", 38.0, 40.0), (12, "S", 40.0, 42.0), (18, "N", 0, 0)],
    7: [(0, "N", 0, 0), (9, "S", 44.0, 46.0), (18, "M", 46.0, 48.0)],
    8: [(0, "N", 0, 0), (4, "M", 52.0, 54.0)],
    9: [(0, "M", 50.0, 52.0), (4, "N", 0, 0)],
    10: [(0, "N", 0, 0), (4, "S", 56.0, 58.0), (12, "M", 58.0, 60.0)],
    11: [(0, "N", 0, 0), (3, "M", 60.0, 62.0), (11, "S", 62.0, 64.0), (18, "M", 64.0, 66.0)],
    12: [(0, "N", 0, 0), (9, "S", 66.0, 68.0), (20, "N", 0, 0)],
    13: [(0, "N", 0, 0), (6, "N", 0, 0)],
    14: [(0, "N", 0, 0), (6, "N", 0, 0), (11, "N", 0, 0)],
    15: [(0, "S", 68.0, 69.8), (3, "N", 0, 0)],
}


def face(n):
    """Median face centre and width of narrator clip n, in 1088x720 source pixels."""
    rows = FACES[str(n)]
    med = lambda k: sorted(r[k] for r in rows)[len(rows) // 2]
    return med(1), med(2), med(3)
# words dropped from picture and sound (fillers / awkward tail)
DROP = {12: {17, 18, 19}, 13: {11, 12, 13, 14, 15}}
# caption text fixes: index -> text ("" hides the word)
CAPS = {
    1: {8: "between"},
    3: {6: "PlotArmour", 7: ""},
    5: {16: "campaigns"},
    7: {2: "makes", 3: "PlotArmour", 4: "", 5: "Studio"},
    9: {2: "Convoke,"},
    11: {0: "Whether", 1: "it's", 2: "", 24: "genuinely"},
    14: {8: "PlotArmour", 9: "", 10: "Studio"},
    15: {0: "PlotArmour", 1: ""},
}


def probe_dur(p):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)],
                       capture_output=True, text=True)
    return float(r.stdout.strip())


def plan():
    """Return video pieces, audio atoms and caption words with global times."""
    pieces, atoms, capwords = [], [], []
    g = 0  # global frame cursor
    for n in range(1, 16):
        words = json.load(open(WORDS / f"{n}.json"))
        dur = probe_dur(RAW / f"{n}.mp4")
        drop = DROP.get(n, set())
        keep = [i for i in range(len(words)) if i not in drop]
        cuts = []
        for a, b in zip(keep, keep[1:]):
            gap = words[b]["start"] - words[a]["end"]
            if gap > GAP or b - a > 1:
                cuts.append((words[a]["end"] + KEEP, words[b]["start"] - KEEP))
        cuts = [(x, y) for x, y in cuts if y - x > 0.05]
        s0 = max(0.0, words[keep[0]]["start"] - 0.10)
        e0 = min(dur, words[keep[-1]]["end"] + 0.20)
        edges = [s0] + [t for c in cuts for t in c] + [e0]
        spans = [(edges[i], edges[i + 1]) for i in range(0, len(edges), 2)]
        bounds = [(-1.0 if k == 0 else words[wi]["start"] - 0.03, lay, m0, cap)
                  for k, (wi, lay, m0, cap) in enumerate(BEATS[n])]
        beat_frames = [0] * len(bounds)
        for (a, b) in spans:
            atom_g, atom_frames = g, 0
            pts = [a] + [bd[0] for bd in bounds[1:] if a < bd[0] < b] + [b]
            for k in range(len(pts) - 1):
                ps, pe = pts[k], pts[k + 1]
                bi = max(i for i, bd in enumerate(bounds) if bd[0] <= ps + 1e-6)
                nf = max(1, round((pe - ps) * FPS))
                _, lay, m0, cap = bounds[bi]
                mg = m0 + beat_frames[bi] / FPS
                parts = [(nf, lay)]
                if lay != "N":  # past the cap the MGV scene is over: back to the narrator
                    keep_f = max(0, min(nf, int((cap - mg) * FPS)))
                    parts = ([(keep_f, lay)] if keep_f else []) + ([(nf - keep_f, "N")] if nf > keep_f else [])
                for cnt, ly in parts:
                    pieces.append(dict(n=n, ss=a + atom_frames / FPS, nf=cnt, lay=ly, bi=bi, mgv=mg, g=g,
                                       punch=(bi + (lay != "N")) % 2))
                    atom_frames += cnt
                    g += cnt
                beat_frames[bi] += nf
            atoms.append(dict(n=n, ss=a, nf=atom_frames, g=atom_g))
            for i in keep:
                w = words[i]
                if a - 0.001 <= w["start"] < b:
                    txt = CAPS.get(n, {}).get(i, w["text"])
                    capwords.append(dict(text=txt, t=atom_g / FPS + (w["start"] - a),
                                         te=atom_g / FPS + (min(w["end"], b) - a), n=n))
    return pieces, atoms, capwords, g


def run(cmd, cwd=None):
    r = subprocess.run([str(c) for c in cmd], capture_output=True, text=True, cwd=cwd)
    if r.returncode:
        raise RuntimeError(" ".join(map(str, cmd)) + "\n" + r.stderr[-800:])


ENC = ["-an", "-c:v", "libx264", "-crf", "14", "-preset", "fast", "-pix_fmt", "yuv420p", "-r", str(FPS)]


def mgv_bg(t):
    """Scene background colour of the MGV at time t (dark section 29.5-37.8 s)."""
    return "0B0B0B" if 29.5 <= t < 37.8 else "F4F4F1"


S_TOP = 540       # split shot: MGV band (16:9 trimmed to its content, body copy dropped)
S_BOTTOM = 1920 - S_TOP


def face_crop(n, W, H, face_out):
    """ffmpeg crop that puts clip n's face at the horizontal centre with a fixed face width (face_out px) in a W x H frame."""
    cx, cy, fw = face(n)
    cw = min(fw * W / face_out, 720 * W / H, 1088)
    ch = cw * H / W
    x0 = min(max(cx - cw / 2, 0), 1088 - cw)
    y0 = min(max(cy - 0.46 * ch, 0), 720 - ch)
    return f"crop={int(cw) // 2 * 2}:{int(ch) // 2 * 2}:{int(x0)}:{int(y0)}"


def render_piece(i, p):
    out = OUT / "pieces" / f"{i:04d}.mp4"
    nar = RAW / f"{p['n']}.mp4"
    dur = p["nf"] / FPS + 0.5
    if p["lay"] == "M":
        cmd = ["ffmpeg", "-v", "error", "-y", "-ss", f"{p['mgv']:.3f}", "-t", f"{dur:.3f}", "-i", RAW / "9-16mgv.mp4",
               "-vf", f"fps={FPS},scale=950:1690:flags=lanczos,pad=1080:1920:65:20:color=0x{mgv_bg(p['mgv'])},format=yuv420p",
               "-frames:v", p["nf"], *ENC, out]
    elif p["lay"] == "N":
        crop = face_crop(p["n"], 1080, 1920, 640 if p["punch"] else 560)
        cmd = ["ffmpeg", "-v", "error", "-y", "-ss", f"{p['ss']:.3f}", "-t", f"{dur:.3f}", "-i", nar,
               "-vf", f"fps={FPS},{crop},scale=1080:1920:flags=lanczos,unsharp=5:5:0.7,format=yuv420p",
               "-frames:v", p["nf"], *ENC, out]
    else:
        crop = face_crop(p["n"], 1080, S_BOTTOM, 500 if p["punch"] else 440)
        fc = (f"[0:v]fps={FPS},crop=1800:900:60:20,scale=1080:{S_TOP}:flags=lanczos,setsar=1[t];"
              f"[1:v]fps={FPS},{crop},scale=1080:{S_BOTTOM}:flags=lanczos,unsharp=5:5:0.6[b];"
              f"[t][b]vstack,format=yuv420p")
        cmd = ["ffmpeg", "-v", "error", "-y", "-ss", f"{p['mgv']:.3f}", "-t", f"{dur:.3f}", "-i", RAW / "16-9mgv.mp4",
               "-ss", f"{p['ss']:.3f}", "-t", f"{dur:.3f}", "-i", nar, "-filter_complex", fc,
               "-frames:v", p["nf"], *ENC, out]
    run(cmd)
    return out


def render_atom(i, a):
    out = OUT / "atoms" / f"{i:04d}.wav"
    d = a["nf"] / FPS
    run(["ffmpeg", "-v", "error", "-y", "-ss", f"{a['ss']:.3f}", "-t", f"{d:.3f}", "-i", RAW / f"{a['n']}.mp4",
         "-af", f"aresample=48000,afade=t=in:d=0.008,afade=t=out:st={d - 0.008:.3f}:d=0.008",
         "-ac", "2", "-ar", "48000", "-c:a", "pcm_s16le", out])
    return out


def ass_time(t):
    cs = round(t * 100)
    return f"{cs // 360000}:{cs // 6000 % 60:02d}:{cs // 100 % 60:02d}.{cs % 100:02d}"


def write_captions(capwords, pieces, path):
    words = [w for w in capwords if w["text"]]
    pages, cur = [], []
    for w in words:
        if cur and (len(cur) >= 3 or cur[-1]["text"][-1] in ".,?!" or w["t"] - cur[-1]["te"] > 0.45
                    or w["n"] != cur[-1]["n"]):
            pages.append(cur)
            cur = []
        cur.append(w)
    if cur:
        pages.append(cur)
    lines = []
    for k, pg in enumerate(pages):
        start = pg[0]["t"]
        last_end = pg[-1]["te"] + 0.20
        end = min(pages[k + 1][0]["t"], last_end) if k + 1 < len(pages) else last_end
        txt = " ".join(w["text"] for w in pg).rstrip(",")
        lines.append(f"Dialogue: 0,{ass_time(start)},{ass_time(end)},Cap,,0,0,0,,"
                     + "{" + BS + "an5" + BS + "pos(540," + str(CAP_Y) + ")}" + txt)
    head = ("[Script Info]\nScriptType: v4.00+\nPlayResX: 1080\nPlayResY: 1920\nWrapStyle: 2\n\n"
            "[V4+ Styles]\nFormat: Name,Fontname,Fontsize,PrimaryColour,SecondaryColour,OutlineColour,BackColour,Bold,"
            "Italic,Underline,StrikeOut,ScaleX,ScaleY,Spacing,Angle,BorderStyle,Outline,Shadow,Alignment,MarginL,"
            "MarginR,MarginV,Encoding\n"
            "Style: Cap,Inter Medium,54,&H00FFFFFF,&H00FFFFFF,&H2A000000,&H00000000,0,0,0,0,100,100,0.3,0,3,16,0,5,60,60,60,1\n\n"
            "[Events]\nFormat: Layer,Start,End,Style,Name,MarginL,MarginR,MarginV,Effect,Text\n")
    Path(path).write_text(head + "\n".join(lines) + "\n", encoding="utf-8")
    return len(pages)


def main():
    for d in ("pieces", "atoms"):
        (OUT / d).mkdir(parents=True, exist_ok=True)
    pieces, atoms, capwords, total = plan()
    print(f"{len(pieces)} pieces, {len(atoms)} atoms, {total / FPS:.1f}s")
    json.dump(dict(pieces=pieces, atoms=atoms, capwords=capwords), open(OUT / "plan.json", "w"), indent=1)
    with ThreadPoolExecutor(6) as ex:
        vids = list(ex.map(lambda ip: render_piece(*ip), enumerate(pieces)))
        auds = list(ex.map(lambda ia: render_atom(*ia), enumerate(atoms)))
    (OUT / "v.txt").write_text("".join(f"file '{v.as_posix()}'\n" for v in vids))
    (OUT / "a.txt").write_text("".join(f"file '{a.as_posix()}'\n" for a in auds))
    run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", OUT / "v.txt", "-c", "copy", OUT / "video.mp4"])
    run(["ffmpeg", "-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", OUT / "a.txt", "-c", "copy", OUT / "audio.wav"])
    pages = write_captions(capwords, pieces, OUT / "captions.ass")
    print(f"{pages} caption pages")
    ass = (OUT / "captions.ass").as_posix().replace(":", "\\:")
    run(["ffmpeg", "-v", "error", "-y", "-i", "video.mp4", "-i", "audio.wav",
         "-vf", "ass=captions.ass:fontsdir=fonts", "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
         "-c:v", "libx264", "-crf", "16", "-preset", "medium", "-pix_fmt", "yuv420p",
         "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", "-shortest", "reel.mp4"], cwd=OUT)
    print("done", OUT / "reel.mp4")


if __name__ == "__main__":
    main()
