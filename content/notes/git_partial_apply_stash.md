+++
title = 'git partial apply stash'
date = '2026-04-07T21:55:30+02:00'
draft = false
tags = ['git']
+++

To partially apply a change from the stash.

Be aware that this completely overwrite local changes:

```bash
git checkout stash@{0} -- $FILENAME
```

To choose what from the stash to pick:
```bash
git checkout -p stash@{0}
```

Source: https://stackoverflow.com/questions/15212882/how-can-i-apply-only-some-of-a-git-stash/32281463#32281463
