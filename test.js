'use strict';
var exec = require('child_process').exec;
var semverRegex = require('semver-regex');
var should = require('should');

describe('CLI', function() {
	var capturedStdout;

	describe('--help', function() {
		before(function(done) {
			exec('sysinternals --help', function(error, stdout, stderr) {
				if (error) {
					done(error);
				}

				capturedStdout = stdout;
				done();
			});
		});

		it('shows helps screen', function() {
			capturedStdout.should.containEql('usage');
		});
	});

	describe('--version', function() {
		before(function(done) {
			exec('sysinternals --version', function(error, stdout, stderr) {
				if (error) {
					done(error);
				}

				capturedStdout = stdout;
				done();
			});
		});

		it('shows version', function() {
			capturedStdout.should.match(semverRegex());
		});
	});
});
