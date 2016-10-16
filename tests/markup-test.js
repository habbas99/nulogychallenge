/**
 * Test cases
 *
 */

var chai = require('chai');
var expect = chai.expect;


describe('Markup - error cases', function() {
	it('No amount specified', function() {
  	});

	it('Amount must be a string or a number', function() {
  	});

  	it('Required workers must be a number', function() {
  	});
});

describe('Markup - success cases', function() {
	it('FLAT markup on 100 should return 5', function() {
  	});

	it('One WORKER markup on 100 should return 1.2', function() {
  	});

  	it('Five WORKER markup on 100 should return 6', function() {
  	});
	
	it('ELECTRONICS markup on 100 should return 2', function() {
  	});

	it('DRUGS markup on 100 should return 7.5', function() {
  	});

  	it('FOOD markup on 100 should return 13', function() {
  	});

  	it('food (lower-cased) markup on 100 should return 13', function() {
  	});

  	it('ALL OTHER TYPES markup on 100 should return 0', function() {
  	});

  	it('FOOD & DRUGS markups on 100 should return 20.5', function() {
  	});
});

describe('Final cost estimate after applying markup(s) - success cases', function() {
	it('Estimate for base price = 1299.99, Workers = 3 and Material = food should return 1,591.58', function() {
  	});

	it('Estimate for base price = $1299.99, Workers = 3 and Material = food should return $1,591.58', function() {
  	});

	it('Estimate for base price = $5,432.00, Workers = 1 and Material = drugs should return $6,199.81', function() {
  	});

  	it('Estimate for base price = $12,456.95, Workers = 4 and Material = books should return $1,591.58', function() {
  	});

  	it('Estimate for base price = $10,005.50, Workers = 2 and Material = food and drugs should return $12,911.60', function() {
  	});
});