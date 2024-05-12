const words = ['apple', 'banana', 'peara','12345', 'grapefruit'];
const longWord = words.find(word => word.length > 5);
console.log(longWord); // Result: 'banana'