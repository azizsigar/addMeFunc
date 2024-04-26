const checkNumber = (n) => 
    n === 0 ? "equal to zero" : (n < 0 ? "less than zero" : "bigger than zero or even");

const result = checkNumber(0);
console.log(result);
