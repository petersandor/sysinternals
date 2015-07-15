'use strict';
var assert = require('assert');
var sysinternals = require('./');

describe('Should return unicorns & rainbows', function() {
	it('returns', function () {
		assert.strictEqual(sysinternals('unicorns'), 'unicorns & rainbows');
	});
});
