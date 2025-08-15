// This is my Practice set 1

// 1. What’s the difference between == and === in JS? Give an example of when == might cause a bug.
/*
== -> It's loosely equality, check for only value and affected by type coercion.

=== -> It's strict equality, check for both value as well as data type, doesn't follow type coercion
*/

// 2. What’s the output? Why?
console.log(typeof null); // object, => It's a legacy bug in js
console.log(typeof NaN); // number, => Special type of numeric data type.


// 3. Explain hoisting and TDZ with an example.
/*
Hoisting => It's a process in js where js engine automatically move the declaration on top of codebase, and var => initialize with undefined. but let and const doesn't initialize due to TDZ.

// TDZ => It's a phenomenon where js knows their memory location available in code base but says can't use before initialization generally occurs with let and const as well as function expression.
*/

// 4. What will be printed and why?
var a = 10;
function test() {
  console.log(a); // undefined, bcz var is functional scoped it's taking value from global scope
  var a = 20;
}
test();


// 5. Difference between shallow copy & deep copy with example.

let myData1 = {
  name:"Govind"
}
// Shallow Copy => In this copy , we doesn't copy actual value we only copy ref .
let myData2 = myData1;
myData2.age = 20;
// both obj would be changed
console.log(myData1)
console.log(myData2)
// Deep Copy => Here we copy actual value instead of copying ref.

let myData3 = structuredClone(myData1);

myData3.email = "ergovindthakur@gmail.com";

console.log(myData3);
console.log(myData1)