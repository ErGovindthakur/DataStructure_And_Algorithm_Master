// Exploring the concept of function currying to get cleaner , reusable code

// Function currying is the process of breaking down a function that takes multiple arguments into a sequence of functions, each taking only one argument at a time.

function multiply(a){
     return function(b){
         return  function(c){
          return a*b*c;
          }
     }
}
console.log(multiply(1)(2)(3));