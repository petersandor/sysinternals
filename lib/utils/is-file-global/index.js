'use strict';
var path = require('path');
var delimiter = path.delimiter;
var globby = require('globby');

/**
 * isFileGlobal() returns path to global file based on filename passed.
 * if not found anywhere in PATH, returns empty string
 *
 * @param {String} fileName
 * @param {Function} callback
 * @return {String}
 */
 function isFileGlobal(fileName, cb) {
   return globby(process.env.PATH.split(delimiter).map(function(globalPath) {
     return path.join(globalPath, fileName);
   }), cb);
 }

module.exports = isFileGlobal;
