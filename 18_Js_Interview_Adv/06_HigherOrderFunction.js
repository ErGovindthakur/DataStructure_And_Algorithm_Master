// Exploring the concept of higher order function

/*
First-class functions mean functions are treated as data — you can store them, pass them around, and return them like variables.
*/

let greetMe = (name) => {
     return `Hello ${name}`
}

let userInputProcess = (callback) => {
     let name = "Govind";

     return callback(name);
}

console.log(userInputProcess(greetMe))

/*
How your code shows both concepts
First-class function: greetMe is stored in a variable and passed as an argument.

Higher-order function: userInputProcess accepts a function (callback) and calls it.


 */