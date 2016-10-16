/**
 * Test cases
 *
 */

var chai = require('chai');
var expect = chai.expect;


describe('Markup error cases', function() {
	it('No amount specified', function() {
  	});

	it('Amount must be a number', function() {
  	});

  	it('Required workers must be a number', function() {
  	});
});

describe('Markup success cases', function() {
	it('FLAT markup on 100 should return 105', function() {
  	});

	it('One WORKER markup on 100 should return 101.2', function() {
  	});

  	it('Five WORKER markup on 100 should return 106', function() {
  	});
	
	it('ELECTRONIC markup on 100 should return 102', function() {
  	});

	it('PHARMACEUTICAL markup on 100 should return 107.5', function() {
  	});

  	it('FOOD markup on 100 should return 113', function() {
  	});

  	it('food (lower-cased) markup on 100 should return 113', function() {
  	});

  	it('ALL OTHER TYPES markup on 100 should return 100', function() {
  	});

  	it('FOOD & PHARMACEUTICAL markups on 100 should return 120.5', function() {
  	});
});