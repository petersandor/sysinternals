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
		'  -f, --find    Finds tool by keywords, displays useful information.',
		'  -l, --list    Lists all Sysinternal utilities with details (version, description, local install path).',
	]
}, {
	boolean: [
		'list'
	],
	string: [
		'find'
	],
	alias: {
		l: 'list',
		f: 'find'
	}
});

if (cli.flags.find && cli.flags.find.length) {
	sysinternals.find(cli.flags.find);
} else if (cli.flags.list) {
	sysinternals.list();
} else {
	cli.showHelp();
}
