// Exploring unary operator in js

let num = 11;

let unarySum = num++ + ++num; // 11 + 13 = 24
console.log(unarySum);

let a = 11; 
let b = 22;
let c = a + b + a++ + b++ + ++a + ++b; 
// c = 11 + 22 + 11 + 22 + 13 + 24 = 103
console.log(c);


let B = true;
// console.log(B)
B++;
console.log(B);

// Note => Can't apply unary operator at constant
// eg -: 1++ (not correct)