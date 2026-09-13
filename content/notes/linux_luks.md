+++
title = 'LUKS'
date = '2026-09-11T19:52:49+02:00'
draft = false
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
```


This step is not mandatory but is useful, enable TRIM/discard on the LUKS layer so the SSD stays healthy
```
sudo cryptsetup --allow-discards --persistent refresh extssd
```

Ensure to add your user as owner
```
sudo mkfs.ext4 -L extssd -E root_owner=$(id -u):$(id -g) /dev/mapper/extssd
```

Close the disk
```
sudo cryptsetup close extssd
```

> You might need to unplug/replug the disk
