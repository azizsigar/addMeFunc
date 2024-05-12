function multiply(a, b) {
    console.assert(typeof a === 'number' && typeof b === 'number', "Inputs are not numbers!");
    return a * b;
  }
  
  console.log(multiply(2, 3)); // Output: 6
  console.log(multiply('hello', 3)); // Error: Inputs are not numbers!
  