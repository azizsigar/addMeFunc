// Create a function that takes length and width and finds the perimeter of a rectangle.


function findPerimeter(length, width) {
    let perimeter = (length+width)*2
    return perimeter
  }
  console.log(findPerimeter(6, 7))
  console.log(findPerimeter(20, 10))
  console.log(findPerimeter(2, 9))

  // Create a function that takes length and width and finds the perimeter of a rectangle.

// with ternary
function findPerimeter(length, width) {
    let perimeter = (length + width) * 2
    return perimeter = (length + width) * 2 ? perimeter : false;
  }
  console.log(findPerimeter(6, 7))
  console.log(findPerimeter(20, 10))
  console.log(findPerimeter(2, 9))