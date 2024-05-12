// İç içe bir dizi
const data = [
    {
      name: "John",
      age: 30,
      address: {
        city: "New York",
        street: "123 Main St",
        zipcode: "10001",
      },
      interests: ["Reading", "Cooking", "Hiking"],
      friends: [
        { name: "Alice", age: 28 },
        { name: "Bob", age: 32 },
      ],
    },
    {
      name: "Alice",
      age: 28,
      address: {
        city: "Los Angeles",
        street: "456 Oak St",
        zipcode: "90001",
      },
      interests: ["Photography", "Yoga", "Traveling"],
      friends: [
        { name: "John", age: 30 },
        { name: "Bob", age: 32 },
      ],
    },
  ];
  
  // Her bir veriyi ve içindekileri listele
  data.forEach((person) => {
    let name = person.name;
    let age = person.age;
    console.log(`Name: ${name}, Age: ${age}`);
    let street = person.address.street;
    let city = person.address.city;
    let zipcode = person.address.zipcode;
    console.log(`Address: ${street}, ${city}, ${zipcode}`);
    console.log("Interests:");
    interests=person.interests
    interests.forEach((interest) => {
      console.log(`  - ${interest}`);
    });
    console.log("Friends:");
  let friends=person.friends
  friends.forEach((friend) => {
      let friendName=friend.name
      let friendAge=friend.age
      console.log(`  - Name: ${friendName}, Age: ${friendAge }`);
    });
    console.log("-------------");
  });
  