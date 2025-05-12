// Exploring how to swap two numbers with, and without using three variables


// 1. By using three variables
let a = 10;
let b = 20;

let c = a;
a = b;
b = c;
console.log("a = ", a);
console.log("b = ", b);

// 2. Without third variables

let x = 12;
let y = 24;

x = x+y; // 36;

y = x - y; // y =  36 - 24 = 12
x = x - y; // x = 36 - 12 = 24;
console.log("x = ",x);
console.log('y = ',y);

// 3. New inbuilt js method

let num1 = 3;
let num2 = 6;
[num1,num2] = [num2,num1];
console.log('num1 = ',num1);
console.log('num2 = ',num2);

