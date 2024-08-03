// src/index.js
const Product = require('./product');
const ShoppingCart = require('./shoppingCart');

// Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Phone', 599.99);
const product3 = new Product(3, 'Tablet', 399.99);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart after removal
console.log('After removing Phone:');
cart.displayCart();

// Display total items and total price
console.log(`Total Items: ${cart.getTotalItems()}`);
console.log(`Total Price: $${cart.getTotalPrice()}`);
