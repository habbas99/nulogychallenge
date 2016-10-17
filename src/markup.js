/*
 *
 * Markup calculator module
 *
 */

var currency = require('./currency');

// static variables
 var BASE_MARKUPS = {
 	"FLAT": 0.05,
 	"WORKER": 0.012
 };

  var MATERIAL_MARKUPS = {
  	"ELECTRONICS": 0.02,
 	"FOOD": 0.13,
 	"DRUGS": 0.075
 };

// public functions
module.exports.estimateCost = estimateCost;
module.exports.calculateFlatMarkup = calculateFlatMarkup;
module.exports.calculateWorkerMarkup = calculateWorkerMarkup;
module.exports.calculateMaterialMarkup = calculateMaterialMarkup;

/**
 * Estimates total cost for the given amount, material types and required workers
 *
 * @param  {String} or {Number} amount
 * @param  {String} materialTypes
 * @param  {Number} requiredWorkers
 * @return {Number}
 */
function estimateCost(amount, materialTypes, requiredWorkers) {
	if(!(typeof amount === "number" || typeof amount === "string")) {
 		 throw new Error('amount must be a string or a number');
 	}

	// convert amount to a number
	amount = currency.getAsNumber(amount);
	if(amount <= 0) {
		 throw new Error('amount must be a greater than 0');
	}

 	var flatCost = amount + calculateFlatMarkup(amount);
 	var workersMarkup = calculateWorkerMarkup(flatCost, requiredWorkers);
 	var materialsMarkup = calculateMaterialMarkup(flatCost, materialTypes);

 	var finalCost = flatCost + workersMarkup + materialsMarkup;
 	finalCost = Math.round(finalCost * 100) / 100;

 	return finalCost;
}

/**
 * Applies flat markup on the given amount
 *
 * @param  {Number} amount
 * @return {Number}
 */
function calculateFlatMarkup(amount) {
	var markup = getMarkup("BASE", "FLAT");

	return calculateMarkup(amount, markup);
}

/**
 * Applies worker's markup on the given amount
 *
 * @param  {Number} amount
 * @param  {Number} requiredWorkers
 * @return {Number}
 */
function calculateWorkerMarkup(amount, requiredWorkers) {
	if(!requiredWorkers) {
		return 0;
	}

 	if(typeof requiredWorkers !== "number") {
 		 throw new Error('requiredWorkers must be a number');
 	}

 	if(requiredWorkers < 0) {
 		 throw new Error('requiredWorkers must be a positive number');
 	}

 	var markup = getMarkup("BASE", "WORKER") * requiredWorkers;

	return calculateMarkup(amount, markup);
 }

/**
 * Applies markup of the given material type(s) on the given amount
 *
 * @param  {Number} amount
 * @param  {String} materialTypes
 * @return {Number}
 */
function calculateMaterialMarkup(amount, materialTypes) {
	if(typeof materialTypes === "string") {
 		materialTypes = [materialTypes];
 	}

	if(!Array.isArray(materialTypes)) {
		throw new Error('materialTypes must be an array');
	}

 	var totalMarkup = 0;
 	materialTypes.forEach(function(materialType) {
 		var markup = getMarkup("MATERTIAL", materialType);
 		totalMarkup += calculateMarkup(amount, markup);
 	});

 	return totalMarkup;
 }

// internal functions
function getMarkup(internalType, markupType) {
	var markup = null;
 	markupType = (markupType && markupType.toUpperCase()) || "";
 	if(internalType === "BASE") {
 		markup = BASE_MARKUPS[markupType];
 	}
 	else {
 		markup = MATERIAL_MARKUPS[markupType];
 	}

 	return markup || 0;
 }

 function calculateMarkup(amount, markup) {
 	if(!amount) {
 		 throw new Error('amount is required to calculte markup');
 	}

 	if(typeof amount !== "number") {
 		 throw new Error('amount must be a number');
 	}

 	if(amount < 0) {
 		 throw new Error('amount must be a positive number');
 	}

 	return amount * markup;
 }