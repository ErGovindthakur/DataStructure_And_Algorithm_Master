// Exploring switch case statement in js

let day = 1;

switch(day){
     case 1:
          console.log("Monday");
          break;
     case 2:
          console.log("Tuesday");
          break;
          
     case 3:
          console.log("Wednesday");
          break;
          
     default:
          console.log("Invalid Day");
}

// Note -: When to use switch case at the place of (if else lader)
// When we compare a constant and exact value for multiple execution , then we prefer switch case instead of (if else lader)


// Interesting facts of switch case in js


// Here we can execute single execution for multiple conditions
switch(day){
     case 1:
     case 2:
     case 3:
          console.log("Monday");
          break;
     case 4:
     case 5:
     case 6:
          console.log("Tuesday");
          break;
     
     default:
          console.log("Invalid Day");
     
}


// Note -: We can also apply conditional expression in switch case

switch(true){
     case 12 > 14:
          console.log("First case is correct");
          break;
     case 12 === 12:
          console.log("Second case is correct");
          break;

     default:
          console.log("Try another expressions");
}

// Interesting stuff

let num1 = 0.2;
let num2 = 0.1;

// let sum = (num1 + num2).toFixed(1); try this line to sharpen the concept

let sum = Number((num1 + num2).toFixed(1)); 

switch(sum){
     case 0.2:
          console.log("Ans = 0.2");
          break;
     case 0.3:
          console.log("Ans = 0.3");
          break;
     default:
          console.log("Invalid ans");
}