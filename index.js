'use strict';
var data = require('./data/suite.json');
var Tool = require('./lib/models/utility');
var firstRun = require('first-run');
var forEach = require('async-foreach').forEach;
var fulltextsearchlight = require('full-text-search-light');
var search;
var Table = require('cli-table2');

var DEFAULTS = {
	searchDb: './_searchdb.json'
};

/**
 * Sysinternals manager constructor
 */

function Sysinternals() {
	if (firstRun()) {
		search = new fulltextsearchlight();

		forEach(data, function(item, index, arr) {
			search.add(item);
		});

		search.saveSync(DEFAULTS.searchDb);
	} else {
		search = fulltextsearchlight.loadSync(DEFAULTS.searchDb);
	}
}

/**
 * Find tool by keyword
 *
 * @param {String}
 */

Sysinternals.prototype.find = function(keyword) {
	var self = this;
	var result;

	if (typeof keyword !== 'string') {
		throw new TypeError('Expected a string');
	}

	result = search.search(keyword);

	if (result.length) {
		forEach(result, function(item, index, arr) {
			self.printToolDetails(item);
		});
	} else {
		self.printNotFound(keyword);
	}
};

/**
 * List all available sysinternal utilities
 */

Sysinternals.prototype.list = function() {
	var self = this;

	forEach(data, function(item, index, arr) {
		self.printToolDetails(item);
	});
};

/**
 * Shows utility details in console
 */

Sysinternals.prototype.printToolDetails = function(item) {
	var tool = new Tool(item);

	tool.collectDetails(function(results) {
		var table = new Table({
			wordWrap: true,
			colWidths: [10, 70],
		});

		table.push({
			'Title': tool.title
		}, {
			'Desc': tool.desc
		}, {
			'Command': tool.exe.slice(0, -4)
		}, {
			'Location': results.location.join('\n')
		});

		console.log(table.toString());
	});
};

/**
 * Shows not found message
 */
Sysinternals.prototype.printNotFound = function(keyword) {
	console.log('Not found: ' + keyword);
};

module.exports = new Sysinternals();
