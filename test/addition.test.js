var assert = require('assert');
var addition = require('../functions/add');

describe('Sample Tests', () => {
	it('one plus one equal to two', () => {
		assert.equal(addition(1, 1), 2);
	});

	it('one plus one not equal to 3', () => {
		assert.notEqual(addition(1, 1), 3);
	});
});
