// Exploring Basic of Recursion

// Before exploring Recursion , let's know how stack memory/ call stack works

greet1();
function greet1(){
     console.log("Hey from 1");
     greet2();
}


function greet2(){
     console.log("Hey from 2");
     greet3();
}

function greet3(){
     console.log("Hey from 3")
}

// Stack Memory/ Call stack => As we know the stack memory works over the concept of "LIFO" , (the task execute and pop first from the memory which comes last);

// On the basis of above three method the greet3(); will pop first , bcz that comes very last in stack memory