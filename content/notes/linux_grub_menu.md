+++
title = 'Grub menu'
date = '2026-10-03T14:02:47+02:00'
draft = true
tags = ['linux', 'grub']
+++

1. Remove inactive entries

GRUB 2.16 ships a new generator script, `/etc/grub.d/31_efi_bootnext`, which runs `efibootmgr` on every `grub-mkconfig`.
The script honors two variables in `/etc/default/grub`.

Remove all BootNext entries:

```
GRUB_DISABLE_BOOTNEXT=true
```

Or keep only entries the firmware marks active:

```
GRUB_BOOTNEXT_OMIT_INACTIVE=true
```

Then regenerate:

```
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

2. Reorder entries

    1. Which entry GRUB boots by default — `GRUB_DEFAULT` in `etc/default/grub`.
    2. The order entries appear in the GRUB menu — the numeric prefix of the scripts in `etc/grub.d/`.
    3. Which bootloader the firmware starts first (GRUB vs. something else) — the UEFI `BootOrder`, managed with
       `efibootmgr`

All `etc/default/grub` changes need `sudo grub-mkconfig -o /boot/grub/grub.cfg`

## Setting the default

`GRUB_DEFAULT="0"` → first entry (linux-lts sorts before linux, 0 indexed)

To list all entries: `sudo grep -oE "menuentry_id_option '[^']+'" /boot/grub/grub.cfg`, then setting new `GRUB_DEFAULT`:

```
`GRUB_DEFAULT="$entry_id"`

# OR

`GRUB_DEFAULT="$entry_name"`
```

To remember the last booted entry:
``` 
GRUB_DEFAULT=saved
GRUB_SAVEDEFAULT=true
```

but `GRUB_DEFAULT` must not be `0`
