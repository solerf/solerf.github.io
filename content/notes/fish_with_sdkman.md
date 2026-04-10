+++
title = 'Sdkman fish'
date = '2025-11-01T00:21:00+01:00'
draft = false
tags = ['java', 'jvm', 'sdkman', 'fish']
+++

The existing `fisher` plugin for `sdkman` does not seem to work, I've not investigated why and probably will not do it.
In any case, to make it work:

1. Install `sdkman` as mentioned in their page
2. Create a `function` for `fish` to source when running `sdk` command:
```shell
function sdk
    bash -c "source '$HOME/.sdkman/bin/sdkman-init.sh'; sdk $argv[1..]"
end
```
3. Don't forget to set `SDKMAN_DIR` when loading `fish`, should be something like:
```shell
set -gx SDKMAN_DIR $HOME/.sdkman
```

Source: https://github.com/sdkman/sdkman-cli/issues/671#issuecomment-1130004319
