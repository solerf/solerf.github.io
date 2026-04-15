+++
title = 'xfce xmonad lockscreen'
date = '2026-04-15T21:31:51+02:00'
draft = false
tags = ['linux', 'xfce', 'xmonad']
+++

Issue with XMonad + XFCE on multi-monitor setups (especially 3+ displays, one being high-res/HiDPI). 
After lock the screen if the screensaver/power manager turns off outputs will make XFCE/xrandr treat some monitors as "disconnected.".
Making XMonad not re-detecting them, the full layout correctly—windows end up invisible, misplaced, or only on the first 1-2 screens.

## Quick Workarounds

Force a full xrandr reset after unlock
Create a script `fix.sh`:

```bash
sleep 2  # Give displays time to wake up
xrandr --auto

# Replace with your exact layout, e.g.:
# xrandr --output DP-0 --primary --mode 3840x2160 --pos 0x0 \
#        --output HDMI-0 --mode 1920x1080 --right-of DP-0 \
#        --output DP-2 --mode 2560x1440 --right-of HDMI-0
xmonad --restart
```

### Make it executable and bind it to a key in your xmonad.hs:Haskell
- `((mod4Mask .|. shiftMask, xK_r), spawn "~/fix.sh")`

### Run the script automatically on unlock
- Use `xfce4-screensaver` or `light-locker` settings if available.
- Or add a hook via `xfce4-session` / `xss-lock` + a wrapper script that runs the above on unlock.
