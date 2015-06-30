#!/usr/bin/env node
'use strict';
var meow = require('meow');
var sysinternals = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ sysinternals [input]',
		'',
		'Examples',
		'  $ sysinternals',
		'  unicorns & rainbows',
		'',
		'  $ sysinternals ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(sysinternals(cli.input[0] || 'unicorns'));
