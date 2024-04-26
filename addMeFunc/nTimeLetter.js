// Create a function that repeats each character in a string n times.

function repeat(str, n) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < n; j++) {
        result += str[i];
      }
    }
    return result;	
  }
  console.log(repeat("mice", 5))
  console.log(repeat("HI", 3))
  console.log(repeat("stop", 5))