const forbiddenLetter=(letter,array)=> array.some(word=>word.includes(letter))

console.log(forbiddenLetter("123123", ["rock", "paper", "scissors"]))