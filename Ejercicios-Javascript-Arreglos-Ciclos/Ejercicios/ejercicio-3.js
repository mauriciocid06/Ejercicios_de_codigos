// Exercise #3 (sugerencia reduce())
// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
//Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

function sumAndProduct(arr) {
  let sum = arr.reduce((total, num) => total + num, 0);
  let product = arr.reduce((total, num) => total * num, 1);

  console.log("The sum is", sum + ". The product is", product + ".");
}

sumAndProduct([1, 2, 3, 4]);
