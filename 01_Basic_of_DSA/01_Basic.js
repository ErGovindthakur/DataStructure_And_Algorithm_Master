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

