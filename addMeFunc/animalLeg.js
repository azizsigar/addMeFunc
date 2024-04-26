// In this challenge, a farmer is asking you to tell him how many legs 
// can be counted among all his animals. The farmer breeds three species:

function animals(chickens, cows, pigs) {
    let chick = chickens * 2
    let momo = cows * 4
    let piggy = pigs * 4
    return `you have ${chickens}, ${cows}, ${pigs} and total leg is: ${chick + momo + piggy}`
}
console.log(animals(2, 3, 5))