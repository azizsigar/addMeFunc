// nested forEach
const people = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
  ];
  
  //print every person
  people.forEach(person => {
    let name=person.name
    let age=person.age
    
    console.log(`Name: ${name}, Age: ${age}`);

  });
  