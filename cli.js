#!/usr/bin/env node
'use strict';
var meow = require('meow');
var sysinternals = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ sysinternals <command> [parameters]',
		'',
		'Examples of usage',
		'  $ sysinternals -f "remote file"',
		'  Found: PsFile v2.11',
		'  Updated: May 2, 2014',
		'  Installed: Yes (cmd: psfile)',
		'',
		'  $ sysinternals -l --installed ',
		'  Prints all installed utilities',
		'',
		'Commands',
		'  -f, --find "keywords separated by space" Finds tool by keywords, displays useful information.',
		'  -l, --list --(installed, not-installed)  Lists Sysinternal utilities. Default: displays all existing',
	]
});

console.log(sysinternals(cli.input[0] || 'unicorns'));
