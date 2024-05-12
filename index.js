<<<<<<< HEAD
const products = [
    { name: "Product 1", price: 10, quantity: 2, shipping: true },
    { name: "Product 2", price: 15, quantity: 3, shipping: false },
    { name: "Product 3", price: 20, quantity: 1, shipping: true },
  ];
  
  const shippingCost = 10;
  const discountThreshold = 20;
  const discountRate = 0.1; // 10% discount
  
  const calculateOrderTotal = (products) => {
    const { totalPrice, shippingTotal } = products.reduce(
      (acc, product) => {
        //declare the objects
let price=product.price
let quantity=product.quantity
        const productPrice = price*quantity
        acc.totalPrice += productPrice;
  
        if (product.shipping) {
          acc.shippingTotal += shippingCost;
          if (shippingCost > discountThreshold) {
            productPrice -= shippingCost * discountRate;
          }
        }
  
        acc.total += productPrice;
        return acc;
      },

      { totalPrice: 0, shippingTotal: 0, total: 0 } // Initial accumulator
    
      );
  
    const averagePrice = totalPrice / products.length;
  
    console.log("Average Price:", averagePrice.toFixed(2));
    return totalPrice;
  };
  
  const orderTotal = calculateOrderTotal(products);
  console.log("Order Total:", orderTotal);
  
=======
const numbers = [1, 3, 5, 6, 7, 9,10,112];
const evenNumber = numbers.find(a => a % 2 === 0);
console.log(evenNumber); // Result: 6
>>>>>>> refs/remotes/origin/dev
