# sysinternals [![Build Status](https://travis-ci.org/petersandor/sysinternals.svg?branch=master)](https://travis-ci.org/petersandor/sysinternals)

> Tools for managing Windows Sysinternals utilities (in early development)

## Install

```
$ npm install --global sysinternals
```

## Usage

```
$ sysinternals --help

  Usage
    $ sysinternals <command> [parameters]

  Examples of usage
    $ sysinternals -f "remote file"
    Found: PsFile v2.11
    Updated: May 2, 2014
    Installed: Yes (cmd: psfile)

    $ sysinternals -l --installed
    Prints all installed utilities

  Commands
    -f, --find <keywords>   Finds tool by keywords
    -l, --list              Lists all Sysinternal utilities with details
```

## License

MIT © [Peter Sandor](http://petersandor.name)
