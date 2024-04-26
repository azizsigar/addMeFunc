// Verilen bir dizideki tüm negatif sayıları sıfıra dönüştüren bir arrow fonksiyonu yazınız.
let arr = [-1, -2, -3, 4, 5, 6];

const replaceNegativeWithZero = (arr) => {
    return arr.map((num) => num < 0 ? 0 : num);
};

const result = replaceNegativeWithZero(arr);
console.log(result);