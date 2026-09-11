+++
title = 'Thunar no recent'
date = '2026-09-11T18:42:17+02:00'
draft = true
tags = ['linux', 'thunar']
+++

> To remove it from UI:
> Right-click on empty part of left bar (Places) and uncheck what not needed

1. Clear list

```bash
rm ~/.local/share/recently-used.xbel
```

2. Create new and force immutability

```
touch ~/.local/share/recently-used.xbel
sudo chattr +i ~/.local/share/recently-used.xbel
```

