// Exploring the concept of scope in js

// Scope => It defines the accessibility of variables and methods in code base.

// Note => There are mainly three scope available in js

// 1. global Scope => Methods are variable can be access anywhere in the code like globally

// name, age, dob can be accessed anywhere in the code
var name = "Govind"; 
let age = 21;
const dob = "16 March";

// 2. functional scoped => The value and variable can only be accessed inside a function

function greetMe(name){
     var country = "India"; // here country is functional scoped
     return `Hello, I'm ${name} from ${country}`;
}
console.log(greetMe("Govind"));

// block scoped => variables can only be accessed inside a block {}

let myName = "Govind"
console.log(myName);
{
let myName = "Govind Thakur";
console.log(myName);
}
console.log(myName);