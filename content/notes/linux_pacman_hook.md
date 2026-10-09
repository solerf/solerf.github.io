+++
title = 'Pacman Hooks'
date = '2026-10-09T11:32:00+02:00'
draft = false
tags = ['linux', 'pacman']
+++


Adding a hook to pacman before/after updetes:

- put a `.hook` file at `/etc/pacman.d/hooks`

> check `alpm-hooks`
> the run as root
> if same name as another system hook, yours replace it

## Examples

## Before

> An useful before hook is one that does backups before updates

```
# 00 in name makes it sort and run first
touch /etc/pacman.d/hooks/00-backup-kernel.hook

[Trigger]
Operation = Upgrade
Type = Package
Target = linux
Target = linux-lts

[Action]
Description = Backing up /boot...
When = PreTransaction
Exec = /usr/bin/bash -c "rm -rf /boot.bak && cp -a /boot /boot.bak"
# pacman update continues even if this hook fails 
AbortOnFail
```

## After

```
# 99 makes it run last (important as it would run after the initramfs)
sudo touch /etc/pacman.d/hooks/99-update-grub.hook

# Content
[Trigger]
# multiple operations
Operation = Install
Operation = Upgrade
Operation = Remove
# multiple packages
Type = Package
Target = linux
Target = linux-lts

[Action]
Description = Updating GRUB config after kernel change...
When = PostTransaction
Exec = /usr/bin/update-grub
```

