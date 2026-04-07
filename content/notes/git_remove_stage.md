+++
title = 'git remove stage'
date = '2026-04-07T21:51:14+02:00'
draft = false 
tags = ['git']
+++

To remove files from stage area from git:

```bash
# a single file
git reset HEAD -- $PATH_OF_THE_FILE

# everything
git reset HEAD -- .

# another option
git restore --staged .

```

It will work as `git add` when using glob patterns.

Source: https://stackoverflow.com/questions/19730565/how-to-remove-files-from-git-staging-area/19730687#19730687
