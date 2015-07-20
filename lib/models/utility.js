'use strict';
var isFileGlobal = require('is-file-global');

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
  isFileGlobal(this.exe, function(err, path) {
    if (err) {
      throw err;
    }

    callback(path);
  });
};

module.exports = SysinternalsUtility;
