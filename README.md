# sysinternals [![Build Status](https://travis-ci.org/petersandor/sysinternals.svg?branch=master)](https://travis-ci.org/petersandor/sysinternals)

> Tools for managing Windows Sysinternals utilities (in early development)


## Install

```
$ npm install --save sysinternals
```


## Usage

```js
var sysinternals = require('sysinternals');

sysinternals('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global sysinternals
```
```
$ sysinternals --help

  Usage
    sysinternals [input]

  Example
    sysinternals
    unicorns & rainbows

    sysinternals ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### sysinternals(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Peter Sandor](http://petersandor.name)
