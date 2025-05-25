// Exploring basic of array in js

// Array -> In programming language the array is collection similar types of data but the game is different in JavaScript we can store multiple types of data it can anything string, number, boolean etc.

// eg -: 
let myDetails = ["Govind","ergovindthakur@gmail.com",11222748,true, 99.99];

console.log(myDetails);

// But storing multiple types of data into a single array is not a good practice according to data structuring process

// so always prefer to keep same types of data into an array

// Here we start

let array = []; // it's an empty array at initial state

// here pushing data into an array using ".push()" method
array.push(1);
array.push(2);
array.push(3);
array.push(3);
array.push(3);
array.push(3);
array.push(3);
array.push(3);

// Here we access array elements individually
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[4]);
console.log(array[4]);

// In js we can access whole array at a time
console.log(array);

// removing an element from an array
array.pop(6);

console.log(array);
// 1. Note -> An array always starts with zero index.
// 2. Note -> In js array is a dynamic and linear data structure which stores data in continuous manner

