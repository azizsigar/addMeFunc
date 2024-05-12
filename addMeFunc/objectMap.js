const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
    ];
    
    // Creating an array containing only the names of users
    const names = users.map(user => user.name);
    console.log(names); // Output: ["Alice", "Bob", "Charlie"]