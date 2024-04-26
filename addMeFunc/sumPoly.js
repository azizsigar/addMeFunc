// function sumPolygon(n) {
//     if (n === 0 || n === 1 || n === 2) {

//         console.log("number is need to be bigger then 2")
//     } else {

//         let deg = (n - 2) * 180;

//         return deg;
//     }
// }
const sumPolygon = n => n <= 2 ? "number needs to be greater than 2" : (n - 2) * 180;

console.log(sumPolygon(2))
