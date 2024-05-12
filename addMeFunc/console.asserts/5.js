function calculateTax(price, state) {
    let taxRate = 0;

    if (state === "NY") {
        taxRate = 0.08;
    } else if (state === "CA") {
        taxRate = 0.09;
    } else if (state === "TX") {
        taxRate = 0.075;
    } else {
        console.assert(false, "Invalid state provided for tax calculation!");
    }

    const taxAmount = price * taxRate;
    return price + taxAmount;
}

console.log(calculateTax(100, "NY")); // Output: 108 (8% tax applied for NY)
console.log(calculateTax(150, "CA")); // Output: 163.5 (9% tax applied for CA)
console.log(calculateTax(80, "TX")); // Output: 86 (7.5% tax applied for TX)
console.log(calculateTax(200, "FL")); // Error: Invalid state provided for tax calculation!
