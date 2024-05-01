// swap cases
// inverted Number
// ignore Boolean value
let swappingCases = 'AzIZisCoOl';
let invertedNumber = [1,-10,20,100,-30];
let ignoreBooleans = 'Aziz123And8765999Ali456';
let sw = swappingCases.split(' ').map(function(elem) {
    return elem === elem.toUpperCase() ? elem.toLowerCase() : elem.toUpperCase()
}).join('');
console.log(sw); //from lowercase to uppercase
let = inv = invertedNumber.map(function(elem){
    return -elem;
}
);
console.log(inv); //negative - to positive +
let ing = ignoreBooleans.split('').map(function(elem){
    return isNaN(parseInt(elem))  ? elem : '';
}).join('');
console.log(ing);// remove the numbers isNaN