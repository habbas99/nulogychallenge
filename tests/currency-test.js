/**
 * Test cases
 *
 */

var chai = require('chai');
var expect = chai.expect;

var currency = require('../src/currency');

describe('Currency convertor - error cases', function() {
	it('Amount must be a string', function() {
		expect(function() {
	        var result = currency.getAsNumber({"amount": 100});
      	}).to.throw('amount must be a string');
  	});
});

describe('Currency convertor - success cases', function() {
	it('Amount 100.50 returns 100.50', function() {
		var result = currency.getAsNumber(100.50);
		expect(result).to.be.a('number');
   		expect(result).to.equal(100.50);
  	});

  	it('Amount $1,009.50 should return 1009.50', function() {
  		var result = currency.getAsNumber("$1,009.50");
		expect(result).to.be.a('number');
   		expect(result).to.equal(1009.50);
  	});
});