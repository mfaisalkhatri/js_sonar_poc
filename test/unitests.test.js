var assert = require('assert');
var addition = require('../functions/add');
const subtract = require('../functions/subtract');

describe('Sample Tests', () => {
	it('one plus one equal to two', () => {
		assert.equal(addition(1, 1), 2);
	});

	it('one plus one not equal to 3', () => {
		assert.notEqual(addition(1, 1), 3);
	});

	it('one minus one not equal to 2', () => {
		assert.notEqual(subtract(1, 1), 2);
	});

	it('three minus one equal to 2', () => {
		assert.equal(subtract(3, 1), 2);
	});
});
