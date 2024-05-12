// Örnek bir dizi
const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 }
  ];
  
  function findProductByPrice(products, minPrice, maxPrice) {
    return products.find(product => product.price >= minPrice && product.price <= maxPrice);
  }
  
  
  const foundProduct = findProductByPrice(products, 600, 1000);
  
  console.log(foundProduct); // Çıktı: { id: 2, name: 'Phone', price: 800 }
  