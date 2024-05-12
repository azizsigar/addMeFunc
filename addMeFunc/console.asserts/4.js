function calculateDiscount(price, isMember) {
    if (isMember) {
        console.assert(price >= 100, "Member discount can only be applied to purchases of $100 or more!");
        return price * 0.9; // 10% discount for members
    } else {
        console.assert(price >= 200, "Non-member discount can only be applied to purchases of $200 or more!");
        return price * 0.8; // 20% discount for non-members
    }
  }
  
  console.log(calculateDiscount(120, true)); // Output: 108 (10% discount applied)
  console.log(calculateDiscount(150, false)); // Output: 120 (20% discount applied)
  console.log(calculateDiscount(90, true)); // Error: Member discount can only be applied to purchases of $100 or more!
  console.log(calculateDiscount(180, false)); // Error: Non-member discount can only be applied to purchases of $200 or more!
  