// Verilen bir dizi içindeki her bir sayıyı alıp, tek sayıları ikiye bölen ve çift sayıları üçe çarpan bir arrow fonksiyonu yazınız.
const transformNumbers = num => 
    num % 2 === 0 ? "even" :"odd";

let result =transformNumbers(2);
console.log(result)