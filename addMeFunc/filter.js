const cars = ["b10", "10h", "10tt", "1t", "12", "10","10", "10", "10"];

const countOccurrences = (arr, target) => {
    const filteredArray = arr.filter(item => item === target);
    return filteredArray.length;
  };

const countOf10 = countOccurrences(cars, "10");
console.log(`"10"  ${countOf10} times have.`);
