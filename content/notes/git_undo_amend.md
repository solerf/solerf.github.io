+++
title = 'git undo amend'
date = '2025-10-25T00:39:50+02:00'
draft = false
tags = ['git']
+++

To undo a `commit --amend` done by mistake:

```shell
# reset the head to the previous commit before the changes done
# leaving changes staged
git reset --soft HEAD@{1}
```

Source: https://stackoverflow.com/questions/1459150/how-to-undo-git-commit-amend-done-instead-of-git-commit

