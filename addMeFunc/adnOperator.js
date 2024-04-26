// JavaScript has a logical operator &&.
//  The && operator takes two boolean values, and returns true
//  if both values are true.


function and(a, b) {
	return a&&b===true?true:false;
}

console.log(and(true, false))
console.log(and(true, true))
console.log(and(false, true))
console.log(and(false, false))