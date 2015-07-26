'use strict';
var isFileGlobal = require('is-file-global');
var path = require('path');
var wmic = require('ms-wmic');

/**
 * Sysinternal utility details model
 *
 * @param {Object}
 */

function SysinternalsUtility(details) {
	this.title = details.title;
	this.desc = details.desc;
	this.exe = details.exe;
}

/**
 * Collect detais of the utility installed on local system
 * Location and version of the utility is analysed, results passed to callback
 *
 * @param {Function} callback
 */

SysinternalsUtility.prototype.collectDetails = function(callback) {
	var wmicLocation;
	var wmicVersionArg;

	isFileGlobal(this.exe, function(err, location) {
		if (err) {
			throw err;
		}

		wmicLocation = path.normalize(location[0]).replace(/\\/g, '\\\\');
		wmicVersionArg = 'datafile where name="' + wmicLocation + '" get Version';

		wmic.execute(wmicVersionArg, function(err, str) {
			if(err) {
				throw err;
			}

			callback({
				location: location ? location : 'Not found!',
				version: str.split('\n')[1]
			});
		});
	});
};

module.exports = SysinternalsUtility;
