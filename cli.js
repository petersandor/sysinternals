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
		'  $ sysinternals -f psfile',
		'  Shows details about psfile',
		'',
		'  $ sysinternals -l',
		'  Lists all available Sysinternals utilities with details',
		'',
		'Commands',
		'  -f, --find <keyword>    Finds tools by keyword (description or part of name)',
		'  -l, --list              Lists all available Sysinternals utilities with details',
		'  -h, --help              Shows help',
		'  -v, --version           Shows version'
	]
}, {
	boolean: [
		'list'
	],
	string: [
		'find'
	],
	alias: {
		h: 'help',
		v: 'version',
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
