// Diff btw var, let and const

// var -> can be use before initialization and it is hoisted by default and initialized with undefined value

a = 9;
var a;
console.log(a);

// let -> it is used to defined variable in js hoisted but not initialized by default

// console.log(myName); // can't be used here
let myName = "Govinda";
console.log(myName);


// sum of two integers 
let num1 = 12;
let num2 = 12;
console.log(num1 + num2); // Here the addition operation is being performed

let num = 12;
let string = "12";
console.log(num+string); // 1212 Here concatenation is occurring

// Below the three console are working differently
console.log("Here is the sum of two number = "+ num1+num2);
console.log("Here is the sum of two number = ", num1+num2);
console.log("Here is the sum of two number = "+ (num1+num2));

// Type Coercion (Bcz of type coercion js do some calculation according to operators automatically)

console.log("12"+12); // concatenation is working
console.log(12+12); // occurring normal addition

console.log("12"-12); // bcz of type coercion js automatically convert string into number and subtract them

console.log("12"*12);
console.log("12"/12);

// process.stdout.print("Hello");
// process.stdout.print("Govind");

// Type Casting => Converting one data type into another one called type casting 

let age = "21";
let ageInNum = Number(age);
console.log(typeof age);
console.log(typeof ageInNum);

let ageInString = String(ageInNum);
console.log(typeof ageInString);