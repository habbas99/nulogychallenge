/*
 *
 * Currency convertor module
 *
 */

// public functions
module.exports.getAsNumber = getAsNumber;

/**
 * Converts given currency amount to a number
 *
 * @param  {String} amount
 * @return {Number}
 */
function getAsNumber(amount) {
 	if(typeof amount === "number") { // already a number
 		 return amount;
 	}

 	if(typeof amount !== "string") {
 		throw new Error('amount must be a string');
 	}
 	
	return Number(amount.replace(/[^0-9\.]+/g, ""));
}