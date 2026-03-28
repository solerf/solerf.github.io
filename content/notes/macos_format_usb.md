+++
title = 'Macos format usb'
date = '2026-03-26T22:26:03+01:00'
draft = false
tags = ['macos']
+++

Quick way to format usb drives in macos:

```bash
diskutil list
diskutil unmountDisk /dev/disk2
diskutil eraseDisk FAT32 SANDISK /dev/disk2
```

To get accepted system formats:

```bash
diskutil listFilesystems
```

Source: https://gist.github.com/garethrees/7b67db37c43415720da920499ab7231c
