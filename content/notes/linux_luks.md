+++
title = 'LUKS'
date = '2026-09-11T19:52:49+02:00'
draft = true
tags = ['linux', 'LUKS']
+++

Steps:

1. Find disk

```
lsblk -o NAME,SIZE,MODEL,TRAN

# Or

fdisk -l
```

2. Run

```
sudo cryptsetup luksFormat /dev/the_disk
```

3. Reformat the disk

```
sudo cryptsetup open /dev/sdX extssd
sudo mkfs.ext4 -L extssd /dev/mapper/extssd
sudo cryptsetup close extssd
```

> You might need to unplug/replug the disk
