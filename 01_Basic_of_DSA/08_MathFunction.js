// Exploring math function in js

console.log(Math.round(12.3)); //12
console.log(Math.ceil(12.3)); //13
console.log(Math.floor(12.3)); // 12
console.log(Math.trunc(12.3)); // removes decimal parts
console.log(Math.pow(2,3)); // 8
console.log(Math.sqrt(8)); // 2.82
console.log(Math.cbrt(9)); // 2.08
console.log(Math.abs(-12)); //12
console.log(Math.max(12,12)); //12
console.log(Math.min(12,12));//12
console.log(Math.random())
let num = 12.23242;
console.log(num.toFixed(3));

// Some Math questions

// 1. Calculate the area and perimeter of rectangle

let l = 12;
let w = 3;

let area = l*w;
let perimeter = 2*(l+w);
console.log("Area = ", area, "\n","Perimeter = ",perimeter);

// 2. Generate OTP of 6 digit

let sixDigitOtp = Math.floor(Math.random()*999999);
console.log(sixDigitOtp);

// 3. Find the area of right angle triangle

let a = 3;
let b = 5;
let c = 7;

let s = (a+b+c)/2;

let triangleArea = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(`Area of Right angle Triangle = ${triangleArea}`);

// 4. Find the circumference of a circle

let r = 12;
console.log(Number((2*(Math.PI*r)).toFixed(2)));