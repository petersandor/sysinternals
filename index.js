'use strict';
var data = require('./data/suite.json');
var Tool = require('./lib/models/utility');
var forEach = require('async-foreach').forEach;
var fulltextsearchlight = require('full-text-search-light');
var search = new fulltextsearchlight();

/**
 * Sysinternals manager constructor
 */

function Sysinternals() {
	forEach(data, function(item, index, arr) {
		search.add(item);
	});
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

	if(result.length) {
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
		console.log(tool.title);
		console.log(tool.desc);
		console.log(results);
	});
};

/**
 * Shows not found message
 */
Sysinternals.prototype.printNotFound = function(keyword) {
	console.log('Not found: ' + keyword);
};

module.exports = new Sysinternals();
