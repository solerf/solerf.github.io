+++
title = 'Artix update ntpd'
date = '2026-03-10T10:35:13+01:00'
draft = false
tags = ['artix', 'linux']
+++

First install:
```bash
# runit, or whatever other init system
pacman -S ntp ntp-runit
```

Then run to sync:
```bash
sudo ntpd -qg
sudo hwclok -w
```
