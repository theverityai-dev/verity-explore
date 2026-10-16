"""Face track for the narrator clips: samples each clip at 6 fps, writes faces.json.

Run:  uv run --with opencv-python python track_faces.py <out_json>
Output: {"1": [[t, cx, cy, w], ...], ...}  (source pixels of the 1088x720 clips)
"""
import json
import sys
from pathlib import Path

import cv2

RAW = Path("D:/Code/verity-explore/RAW CLIPS")
cascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
out = {}
for n in range(1, 16):
    cap = cv2.VideoCapture(str(RAW / f"{n}.mp4"))
    dur = cap.get(cv2.CAP_PROP_FRAME_COUNT) / max(cap.get(cv2.CAP_PROP_FPS), 1)
    rows, t = [], 0.0
    while t < dur:
        cap.set(cv2.CAP_PROP_POS_MSEC, t * 1000)
        ok, fr = cap.read()
        if not ok:
            break
        g = cv2.cvtColor(fr, cv2.COLOR_BGR2GRAY)
        faces = cascade.detectMultiScale(g, 1.1, 6, minSize=(90, 90))
        if len(faces):
            x, y, w, h = max(faces, key=lambda f: f[2] * f[3])
            rows.append([round(t, 2), float(x + w / 2), float(y + h / 2), float(w)])
        t += 1 / 6
    out[str(n)] = rows
    ws = sorted(r[3] for r in rows)
    print(n, len(rows), "samples; median face", round(ws[len(ws) // 2]) if ws else None,
          "cx", round(sum(r[1] for r in rows) / max(len(rows), 1)), "cy", round(sum(r[2] for r in rows) / max(len(rows), 1)))
json.dump(out, open(sys.argv[1], "w"))
