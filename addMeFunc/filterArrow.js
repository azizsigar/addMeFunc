
const apiResponse = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];

// Sadece yaşları 30'dan büyük olanları filtrele
const filteredUsers = apiResponse.filter(user => user.age > 30);
console.log(filteredUsers);
