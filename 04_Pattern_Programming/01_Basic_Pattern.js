// Exploring basic of pattern programming
const prompt = require('prompt-sync')();

// Here i am exposing a hidden secret of javascript node environment

// Print the hello world in same -> It's not possible using "console.log()" Method

console.log("Hello");
console.log("World!");


// Here we will use "process.stdout.write()" method to print everything in same line

process.stdout.write("Hello ");
process.stdout.write("world!");

console.log("");
// Note -> prompt() function is browser function which will not run at terminal

// Note -> For using prompt function at terminal , will have to install some external packages

// "npm i prompt-sync" -> this is the package

let num = prompt("Enter a number -: ");
console.log(`Your number is ${num}`)