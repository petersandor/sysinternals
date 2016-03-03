# sysinternals [![Build Status](https://travis-ci.org/petersandor/sysinternals.svg?branch=master)](https://travis-ci.org/petersandor/sysinternals)

> Tools for managing [Windows Sysinternals utilities](https://technet.microsoft.com/en-us/sysinternals)

## Prerequisites
Windows with Sysinternals suite installed (and added in `PATH` variable).
- Download manually at https://technet.microsoft.com/en-us/sysinternals
- If you are using [chocolatey](https://chocolatey.org/) just run `choco install sysinternals`.

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
    $ sysinternals -f psfile
    ┌──────────┬──────────────────────────────────────────────────────────────────────┐
    │ Title    │ PsFile                                                               │
    ├──────────┼──────────────────────────────────────────────────────────────────────┤
    │ Desc     │ See what files are opened remotely.                                  │
    ├──────────┼──────────────────────────────────────────────────────────────────────┤
    │ Command  │ psfile                                                               │
    ├──────────┼──────────────────────────────────────────────────────────────────────┤
    │ Location │ C:/ProgramData/chocolatey/bin/psfile.exe                             │
    └──────────┴──────────────────────────────────────────────────────────────────────┘

    $ sysinternals -l
    Lists all available Sysinternals utilities with details

  Commands
    -f, --find <keyword>    Finds tools by keyword (description or part of name)
    -l, --list              Lists all available Sysinternals utilities with details
    -h, --help              Shows help
    -v, --version           Shows version
```

## License

MIT © [Peter Sandor](http://petersandor.name)
