const user = {
    name: 'Alice',
    age: 30,
    address: {
    street: '123 Main St',
    city: 'New York'
    },
    greet: function() {
    return 'Hello, I am ' + this.name;
    }
    };
    
    console.log(user.name); // Output: Alice
    console.log(user.address.city); // Output: New York
    console.log(user.greet()); // Output: Hello, I am Alice