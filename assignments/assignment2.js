// Assignment 2: Operators, Expressions and Input Handling
// Run this file in a browser console because it uses prompt().

const billAmount = Number(prompt("Enter bill amount:"));
const tipPercentage = Number(prompt("Enter tip percentage:"));

if (Number.isNaN(billAmount) || Number.isNaN(tipPercentage)) {
  console.log("Please enter valid numbers.");
} else {
  const tip = billAmount * (tipPercentage / 100);
  const total = billAmount + tip;

  console.log("Bill Amount: $" + billAmount);
  console.log("Tip Percentage: " + tipPercentage + "%");
  console.log("Tip Amount: $" + tip);
  console.log("Total Bill: $" + total);
}

