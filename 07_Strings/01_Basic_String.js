// exploring basic of string in js

// string -> In js anything within a single and double quotes called string

// Note -> In js string are not the array of character to it behaves like an array.


let name = "Govind Thakur";
console.log(name[0]);

// String doesn't have any methods like push() and pop(), because that's not array

// name.push("ji"); // it will through an error

// Note -> Strings are immutable bcz it can't be mutate.

name[0] = "A"; // here we are not able to mutate a string .
console.log(name);

// Note -> When you try to change string using reassigning it create a new string don't change actual value.

name += " Ji";
console.log(name); // here we are creating a new instance instead of modifying the original one