// Örnek bir dizi
const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 }
  ];
  
  // Kullanıcının belirlediği fiyat aralığında bir ürünü bulan fonksiyon
  function findProductByPrice(products, minPrice, maxPrice) {
    console.log(maxPrice)
    console.log(products)
  console.log(products.map((x)=>x.id))
    console.log(products.map((x)=>x.name))
    console.log(products.map((x)=>x.price))
    console.log(minPrice)
    return products.find(product => product.price >= minPrice && product.price <= maxPrice);
  }
  
  // Finding according to given 2 params
  const foundProduct = findProductByPrice(products, 600, 1000);
  
  console.log(foundProduct); // Çıktı: { id: 2, name: 'Phone', price: 800 }
  