// Örnek bir dizi
const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 }
  ];
  
  // Dizi içinde belirli bir koşulu sağlayan ilk öğeyi bulan fonksiyon
  const foundUser = users.find(user => user.age === 25);
  
  console.log(foundUser); // Çıktı: { id: 2, name: 'Bob', age: 25 }
  