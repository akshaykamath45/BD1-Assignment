const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

// server side values
let tax = 5;
let discountPercentage = 10;
let loyaltyRate = 2;

// total price of items of cart
function updateCartPrice(newItemPrice, cartTotal) {
  let totalCartPrice = newItemPrice + cartTotal;
  return totalCartPrice.toString();
}
app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice);
  let cartTotal = parseFloat(req.query.cartTotal);
  res.send(updateCartPrice(newItemPrice, cartTotal));
});

// discount for members
function applyDiscount(cartTotal, isMember) {
  if (isMember === 'true') {
    cartTotal -= (cartTotal * discountPercentage) / 100;
  }
  return cartTotal.toString();
}
app.get('/membership-discount', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  const { isMember } = req.query;
  res.send(applyDiscount(cartTotal, isMember));
});

// tax on cart total
function calculateTax(cartTotal) {
  let taxAmount = (cartTotal * tax) / 100;
  return taxAmount.toString();
}
app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  res.send(calculateTax(cartTotal));
});

// eta based on shipping method
function calculateEta(shippingMethod, distance) {
  let days = 0;
  if (shippingMethod === 'express') {
    days += distance / 100;
  } else {
    days += distance / 50;
  }
  return days.toString();
}
app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  res.send(calculateEta(shippingMethod, distance));
});

// shipping cost based on weight and distance
function calculateShippingCost(weight, distance) {
  let shippingCost = weight * distance * 0.1;
  return shippingCost.toString();
}
app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  res.send(calculateShippingCost(weight, distance));
});

// loyalty points from purchase
function calculateLoyaltyPoints(purchaseAmount) {
  let loyaltyPoints = purchaseAmount * 2;
  return loyaltyPoints.toString();
}
app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  res.send(calculateLoyaltyPoints(purchaseAmount));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
