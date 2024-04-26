const correctStream = (user, correct) => user.map((word, index)=> word === correct[index] ? 1 : -1)
console.log(correctStream(
  ["it", "is", "find"],
  ["it", "is", "fine"]
))