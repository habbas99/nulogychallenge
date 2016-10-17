/**
 * Test cases
 *
 */

var chai = require('chai');
var expect = chai.expect;

var markup = require('../src/markup');

/*
 *	Test cases for individual markups
 */
describe('Markup - error cases', function() {
  	it('Required workers must be a number', function() {
		expect(function() {
	        var result = markup.calculateWorkerMarkup(100, "abc");
      	}).to.throw('requiredWorkers must be a number');
  	});

  	it('Amount must be a positive number', function() {
		expect(function() {
	        var result = markup.calculateWorkerMarkup(-1, 5);
      	}).to.throw('amount must be a positive number');
  	});

  	it('Required workers must be a positive number', function() {
		expect(function() {
	        var result = markup.calculateWorkerMarkup(100, -1);
      	}).to.throw('requiredWorkers must be a positive number');
  	});
});

describe('Markup success cases', function() {
	it('FLAT markup on 100 should return 5', function() {
		var result = markup.calculateFlatMarkup(100);
		expect(result).to.be.a('number');
   		expect(result).to.equal(5);
  	});

	it('One WORKER markup on 100 should return 1.2', function() {
		var result = markup.calculateWorkerMarkup(100, 1);
		expect(result).to.be.a('number');
   		expect(result).to.equal(1.2);
  	});

  	it('Five WORKER markup on 100 should return 6', function() {
		var result = markup.calculateWorkerMarkup(100, 5);
		expect(result).to.be.a('number');
   		expect(result).to.equal(6);
  	});
	
	it('ELECTRONICS markup on 100 should return 2', function() {
		var result = markup.calculateMaterialMarkup(100, "ELECTRONICS");
		expect(result).to.be.a('number');
   		expect(result).to.equal(2);
  	});

	it('DRUGS markup on 100 should return 7.5', function() {
		var result = markup.calculateMaterialMarkup(100, "DRUGS");
		expect(result).to.be.a('number');
   		expect(result).to.equal(7.5);
  	});

  	it('FOOD markup on 100 should return 13', function() {
		var result = markup.calculateMaterialMarkup(100, "FOOD");
		expect(result).to.be.a('number');
   		expect(result).to.equal(13);
  	});

  	it('food (lower-cased) markup on 100 should return 13', function() {
		var result = markup.calculateMaterialMarkup(100, "food");
		expect(result).to.be.a('number');
   		expect(result).to.equal(13);
  	});

  	it('ALL OTHER TYPES markup on 100 should return 0', function() {
		var result = markup.calculateMaterialMarkup(100, "OTHER");
		expect(result).to.be.a('number');
   		expect(result).to.equal(0);
  	});

  	it('FOOD & DRUGS markups on 100 should return 20.5', function() {
  		var result = markup.calculateMaterialMarkup(100, ["FOOD", "DRUGS"]);
		expect(result).to.be.a('number');
   		expect(result).to.equal(20.5);
  	});
});

/*
 *	Test cases for calculating final cost after applying markups
 */
describe('Estimate final cost - error cases', function() {
	it('No amount specified', function() {
   		expect(function() {
	        var result = markup.estimateCost();
      	}).to.throw('mount must be a string or a number');
  	});

	it('Amount must be a string or a number', function() {
		expect(function() {
	        var result = markup.estimateCost({"amount": 100});
      	}).to.throw('amount must be a string or a number');
  	});

	it('Amount must be a greater than 0', function() {
		expect(function() {
	        var result = markup.estimateCost(0, "food", 3);
      	}).to.throw('amount must be a greater than 0');
  	});
});

describe('Estimate final cost - success cases', function() {
	it('Estimate for base price = 1299.99, Workers = 3 and Material = food should return 1591.58', function() {
		var result = markup.estimateCost(1299.99, "food", 3);
		expect(result).to.be.a('number');
   		expect(result).to.equal(1591.58);
  	});

	it('Estimate for base price = $1,299.99, Workers = 3 and Material = food should return 1591.58', function() {
		var result = markup.estimateCost("$1,299.99", "food", 3);
		expect(result).to.be.a('number');
   		expect(result).to.equal(1591.58);
  	});

	it('Estimate for base price = $5,432.00, Workers = 1 and Material = drugs should return 6199.81', function() {
		var result = markup.estimateCost("$5,432.00", "drugs", 1);
		expect(result).to.be.a('number');
   		expect(result).to.equal(6199.81);
  	});

  	it('Estimate for base price = $12,456.95, Workers = 4 and Material = books should return 13707.63', function() {
  		var result = markup.estimateCost("$12,456.95", "books", 4);
		expect(result).to.be.a('number');
   		expect(result).to.equal(13707.63);
  	});

  	it('Estimate for base price = $10,005.50, Workers = 2 and Material = food and drugs should return 12911.60', function() {
  		var result = markup.estimateCost("$10,005.50", ["food", "drugs"], 2);
		expect(result).to.be.a('number');
   		expect(result).to.equal(12911.60);
  	});
});