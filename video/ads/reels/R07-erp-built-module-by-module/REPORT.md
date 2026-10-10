# R07 report

Delivered file: `video/renders/ads/R07/verity-meta-R07-9x16-v4.mp4` (1080 x 1920, 30 fps, 43.6 s, 13.3 MB, founder VO)
Engine: hybrid. One persistent `@remotion/three` studio for the whole film (physical glass, light, camera, depth of field)
with Remotion HTML layers for type, drafting film, UI, captions. Composition `Ad-R07-ERP-9x16`, render with `--gl=angle`.
Boards: frozen, all ten at 8 or more (`BOARDS.md`).

## Versions

| Version | Result |
|---|---|
| v1 | Audit failed: 36% frozen, six holds over 1.0 s (S3, S4a, S5, S6). The 3D camera drift was too subtle to register, and depth-of-field blur hid it further. Loudness -16.3 LUFS. Caption chunker ran past sentence ends |
| v2 | One continuous dolly-in (scale 1.00 to 1.115, linear, world and object layers only; type stays still). 6% frozen, one 1.17 s hold in S5. Loudness -15.9 |
| v3 | S5 lines settle and step back more slowly; VO gain fixed. 4% frozen, no hold over 1.0 s, -14.0 LUFS. Frame strip found two headlines cross-fading on top of each other at three seams |
| v4 | Headlines sequenced: each is gone before the next lands. Current |

## Audit (v4)

- Holds at or over 0.6 s: 23.77 s for 0.77 s, 25.27 s for 0.90 s (between the founder's process phrases). Total frozen 1.7 s of 43.6 s = 4%.
- Jumps: none. Every seam is carried by an object (the plane splits, the sheet arrives over the business, the map collapses into the workspace, the sheet steps aside and becomes the end-card object) or by headline sequencing.
- Loudness: -14.0 LUFS integrated, peak -2.9 dBFS. VO only; music and sound design not yet added.
- Captions: chunked from `vo/words.json`, never run past a sentence end, hidden on the end card.

## Frames viewed

Spot frames at 1.5, 6, 10, 16, 21, 25, 30, 35, 41 s (pre-render), the seam strip at 2.6, 5.0, 7.6, 13.8, 19.2, 23.3, 28.4, 32.8, 39.2, 43.0 s (v3), and the headline seams at 2.3, 2.5, 4.7, 5.0, 7.1, 7.4, 22.8, 23.2 s (v4).

## Open defects and next steps

1. **23.1 s:** "Requirement." lands while the workspace is still fading out behind it (about 0.3 s). Start the workspace and floor-plan exit at 22.6 s.
2. **Caption chunks** sometimes begin with a dangling word from the previous phrase ("hain, but har business..."). Prefer breaking after a comma that ends a clause.
3. **Offer line re-record** ("Verity Business Blueprint", not "Business Analysis Blueprint"). After re-recording, re-run `words.json` for that segment and update `V.offer`/`V.diwali` in `Film.tsx`.
4. **Claims:** Sales/PM to confirm "from scratch" and the IIM/IIT wording before live (`offer-and-claims.md`).
5. **Finishing in Resolve:** restrained sound design (soft UI clicks on the ticks and the module builds, one confirmation sound on the approval tick, understated music bed ducked under the VO), final mix at -14 LUFS, grade check, 4:5 cut, SRT export.
6. **Not yet run:** full `templates/qa-checklist.md` and a phone viewing.
