// Two numbers are passed as parameters. The first parameter 
// divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(x, y) {
	let result = x%y
  return result
}
console.log(remainder(1, 3))
console.log(remainder(3, 4))
console.log(remainder(-9, 45))
console.log(remainder(5, 5))