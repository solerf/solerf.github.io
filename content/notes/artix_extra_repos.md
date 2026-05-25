+++
title = 'Artix_extra_repos'
date = '2026-05-26T00:30:15+02:00'
draft = true
tags = []
+++

1. Add respective keys (check them before at web page to ensure they haven't changed)
2. Add respective mirrors to `/etc/pacman.conf`
3. Update local with `sudo pacman -Syy`

## Arch Linux
```bash
sudo pacman -S artix-archlinux-support
sudo pacman-key --populate archlinux
```

```bash
[extra]
Include = /etc/pacman.d/mirrorlist-arch

[community]
Include = /etc/pacman.d/mirrorlist-arch

# Uncomment if you need 32-bit support:
#[multilib]
#Include = /etc/pacman.d/mirrorlist-arch
```

## Chaotic AUR: https://aur.chaotic.cx/docs

```bash
sudo pacman-key --recv-key 3056513887B78AEB --keyserver keyserver.ubuntu.com
sudo pacman-key --lsign-key 3056513887B78AEB

# to install keyring
sudo pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-keyring.pkg.tar.zst'

# to install mirror
sudo pacman -U 'https://cdn-mirror.chaotic.cx/chaotic-aur/chaotic-mirrorlist.pkg.tar.zst'
```

```bash
[chaotic-aur]
Include = /etc/pacman.d/chaotic-mirrorlist
```

## Andontie AUR: https://aur.andontie.net/

```bash
sudo pacman-key --recv-key 72BF227DD76AE5BF
sudo pacman-key --lsign-key 72BF227DD76AE5BF
```

```bash
[andontie-aur]
Server = https://aur.andontie.net/$arch
```
