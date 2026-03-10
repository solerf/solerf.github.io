+++
title = 'Artix_update_ntpd'
date = '2026-03-10T10:35:13+01:00'
draft = false
tags = []
+++

First install:
```bash
# runit as it is the one I use, use other depending on init system
pacman -S ntp ntp-runit
```

Then run to sync:
```bash
sudo ntpd -qg
sudo hwclok -w
```
