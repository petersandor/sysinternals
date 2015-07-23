'use strict';
var isFileGlobal = require('is-file-global');
var exec = require('child_process').exec;
var path = require('path');

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

	isFileGlobal(this.exe, function(err, location) {
		if (err) {
			throw err;
		}

		wmicLocation = path.normalize(location[0]).replace(/\\/g, '\\\\');

		exec('wmic datafile where name="' + wmicLocation + '" get Version',
			function(err, stdout, stderr) {
				if (!err) {
					callback({
						location: location ? location : 'Not found!',
						version: stdout.trim().split('\n')[1]
					});
				} else {
					throw err;
				}
			});
	});
};

module.exports = SysinternalsUtility;
