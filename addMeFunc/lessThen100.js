// Given two numbers, return true if the sum of both numbers is less than 100. 
// Otherwise return false.

// function lessThan100(a, b) {
// 	if (a+b <=100) {
//     return true
//   } else {
//     return false
//   }
// }
const lessThan100=(a,b)=> a+b<=100 ?true:false
console.log(lessThan100(22, 15))
console.log(lessThan100(2, 5))//100den kucuk
console.log(lessThan100(22, 1115))//100den buyuk