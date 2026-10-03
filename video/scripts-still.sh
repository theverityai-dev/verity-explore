#!/usr/bin/env bash
# usage: ./scripts-still.sh <seconds> [name]
B=${REMOTION_BROWSER:-/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell}
f=$(python3 -c "print(round($1*60))")
npx remotion still src/adapt-entry.tsx Reel-Adapt-9x16 out/${2:-s_$1}.png --frame=$f --browser-executable=$B --chrome-mode=headless-shell 2>&1 | grep -v "^$" | tail -3
