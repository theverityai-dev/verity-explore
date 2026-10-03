#!/usr/bin/env bash
# usage: COMP=Reel-Adapt-9x16 ./scripts-still.sh <seconds> [name]   (COMP defaults to Reel-Adapt-8x9)
B=${REMOTION_BROWSER:-/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell}
f=$(python3 -c "print(round($1*60))")
npx remotion still src/adapt-entry.tsx ${COMP:-Reel-Adapt-8x9} out/${2:-s_$1}.png --frame=$f --browser-executable=$B --chrome-mode=headless-shell 2>&1 | grep -v "^$" | tail -3
