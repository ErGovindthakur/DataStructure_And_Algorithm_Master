// Exploring do while loop in js

/*
Note ->
There a two types of loop
1) Entry controlled -> for and while loop
Bcz here we apply entry condition before executing the code

2) Exit controlled -> do while loop 
Here we execute the code first time and then apply condition either the condition is right or wrong
*/

// eg

do {
  console.log("Hey"); // Here applied condition is incorrect but code is being executed once
} while (12 < 11);

// Task -> Repeat "Hello" until the user enter the hello

let greet;
let repeatHello = (greet) => {
  do {
    console.log("Hello");
  } while (greet !== "Hello");
};
repeatHello("Hello")