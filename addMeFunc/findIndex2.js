// Create a function that finds the index of a given item.
function search(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
  }
  
  console.log(search([1, 5, 3], 5)); // 1
  