// Exploring js interesting operators

// +, - , * ,/ , %

let num1 = 12;
let num2 = 5;

// Addition
console.log(num1+num2);
// Subtraction
console.log(num1-num2);
// Multiplication
console.log(num1*num2);
// Division
console.log(num1/num2); // gives us the actual value (2.4) but always use Math.floor(num1/num2) in js
// Modulo
console.log(num1%num2); // gives us remainders (2)


// Interesting facts
console.log(num2/num1); // ans (5/12) = 0.4323; 

// Note=> if dividend is lesser than divisor than ans will be dividend
console.log(num2%num1); // ans (5%12) = 5; 