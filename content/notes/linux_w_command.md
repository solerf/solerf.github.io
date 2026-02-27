+++
title = 'Linux `w` command'
date = '2025-10-28T22:57:25+01:00'
draft = false
tags = ['linux']
+++

When wrongly typing `ALT + F keys` a new `tty` will be open, losing where you were, usually the desktop.

Use the `w` command to see where you are:
```shell
user        tty7      lun08   38:57m 21:57  17.21s xfce4-session
user        tty1      11:47   11:09m  0.01s  0.01s -bash
```

Then return with `ALT + F$number`.

