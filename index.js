// İç içe bir dizi
const data = [
    {
      name: "John",
      age: 30,
      address: {
        city: "New York",
        street: "123 Main St",
        zipcode: "10001"
      }
    },
    {
      name: "Alice",
      age: 28,
      address: {
        city: "Los Angeles",
        street: "456 Oak St",
        zipcode: "90001"
      }
    }
  ];
  
  // create new object
  const mappedData = data.map(data => {
      return {
      fullName: `${data.name}, ${data.age}`,
      location: `${data.address.street}, ${data.address.city}, ${data.address.zipcode}`
    };
  });
  
  // print new array
  mappedData.forEach(mappedData => {
    console.log(`Full Name: ${mappedData.fullName}`);
    console.log(`Location: ${mappedData.location}`);
    console.log("-------------");
  });
  