const addition = (a, b) => a + b;

console.log(addition(4,9))


const checkEvenOrOdd = num => num % 2 === 0 ? "Even" : "Odd";

console.log(checkEvenOrOdd(5)); // Output: "Odd"
//  //////////////////////////////////////////
const manipulateString = (strArray, strObj) => {
    const result = [];
    strArray.forEach(word => {
        const transformedWord = strObj[word] ? strObj[word].toUpperCase() : word.toLowerCase();
        result.push(transformedWord);
    });
    return result.join(' ');
};

const stringArray = ['hello', 'world', 'javascript'];
const stringObject = {
    hello: 'hi',
    world: 'planet'
};

console.log(manipulateString(stringArray, stringObject)); // Output: "HI planet javascript"
////////////////////////////////////////////////
// Örnek API yanıtı
// const apiResponse1 = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Alice', age: 25 },
//     { id: 3, name: 'Bob', age: 35 }
// ];

// // Sadece yaşları 30'dan büyük olanları filtrele
// const filteredUsers = apiResponse.filter(user => user.age > 30);
// console.log(filteredUsers);
//////////////////////////////////////
// API yanıtı
const apiResponse = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];

// Sadece isimleri içeren yeni bir dizi oluştur
const names = apiResponse.map(user => user.name);
console.log(names);
/////////////////////////////////////////////
// API yanıtı
// const apiResponse = { id: 1, name: 'John', age: 30 };

// // Yaşı 35'e güncelle
// apiResponse.age = 35;
// console.log(apiResponse);
// ///////////////////////////////////////
// API yanıtı
// const apiResponse = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Alice', age: 25 },
//     { id: 3, name: 'Bob', age: 35 }
// ];

// // Yaşların toplamını hesapla
// const totalAge = apiResponse.reduce((total, user) => total + user.age, 0);
// console.log(totalAge);
