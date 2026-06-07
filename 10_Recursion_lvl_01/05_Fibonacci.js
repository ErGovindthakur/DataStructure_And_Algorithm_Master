// Exploring how to write fibonacci series code using iterative and recursive way

// 1. Iterative way

let findFibonacci = (n) => {
     let a = 0;
     let b = 1;

     console.log("Here is the list of all fibonacci -: ");

     for(let i = 0; i<n; i++){

          // printing the cur val
          console.log(a);

          let next = a+b;
          a = b;
          b = next;
     }
}

// findFibonacci(10);


// 2. Recursive way
let fib = (n) => {
     if(n === 0) return 0;
     if(n === 1) return 1;

     return fib(n-1)+fib(n-2);
}

// The function where the fib(n) getting data from
let findFibonacciRec = (n) => {

     console.log("Fibonacci series using recursion -: ");

     for(let i = 0; i<n; i++){
          console.log(fib(i));
     }
     return `Actual Fib value -> ${fib(n)}`;
};

console.log(findFibonacciRec(2));