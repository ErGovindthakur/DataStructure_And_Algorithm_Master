// Exploring relational operator in js

// ==, ===, <, >, <=, >=, !, !=, !==

console.log(12 == 12); // true
console.log(12 == "12"); // true => here == only checks value not data types
console.log(12 === "12"); // false => here === checks both values as well as data types

console.log(12<12); // false
console.log(12<=12); // true
console.log(12>12); // false
console.log(12>=12); // true

console.log(12 != 12); // false
console.log(12 != "12"); // false
console.log(12 !== 12); // false
console.log(12 !== "12"); // true

console.log(false);
console.log(!(false)); // true

