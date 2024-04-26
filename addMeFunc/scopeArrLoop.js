const array = [1, 2, 3, 4, 5];
const index = 3; // Örnek olarak 2. indisdeki öğeyi alalım

function veriGetir(dizi, index) {
    if (index >= 0 && index < dizi.length) { // İndex'in dizinin sınırları içinde olduğundan emin olun
        return dizi[index]; // İndex'teki öğeyi döndür
    } else {
        return "Hata: Geçersiz indis"; // Geçersiz indis hatası
    }
}
console.log(veriGetir(array, index)) ; // İşlevi çağırarak veriyi alalım

