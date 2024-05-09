const orders = [
    { 
      id: 1,
      customer: "John",
      items: [
        { name: "T-shirt", price: 20 },
        { name: "Jeans", price: 40 }
      ]
    },
    { 
      id: 2,
      customer: "Alice",
      items: [
        { name: "Sneakers", price: 50 },
        { name: "Backpack", price: 30 },
        { name: "T-shirt", price: 25 }
      ]
    },
    { 
      id: 3,
      customer: "Bob",
      items: [
        { name: "Hoodie", price: 45 },
        { name: "Sweatpants", price: 35 },
        { name: "Cap", price: 15 },
        { name: "Socks", price: 5 }
      ]
    }
  ];
  
  // list elements and every order
  orders.forEach(order => {
    let orderId=order.id
    let customer=order.customer

    console.log(`Order ID: ${orderId}`);
    console.log(`Customer: ${customer}`);
    console.log("Items:");
    order.items.forEach(item => {
        let itemName=item.name
        let itemPrice=item.price
      console.log(`  - ${itemName}: $${itemPrice}`);
    });
    console.log("-------------");
  });
  