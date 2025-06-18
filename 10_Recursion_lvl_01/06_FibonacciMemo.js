// solving the fibonacci series code using most optimized way (using memoization technique)

let fib = (n, memo={}) => {
     if(n===0) return 0; // base case
     if(n===1) return 1; // base case

     if (memo.hasOwnProperty(n))return memo[n];
     
     memo[n] = fib(n-1, memo) + fib(n-2, memo);
     // console.log("from fib -: ",memo);

     return memo[n];
};

let findFibonacci = (n) => {
     console.log("Fibonacci using Recursion + Memoization technique -: ");
     for(let i = 0; i<n; i++){
          console.log(fib(i))
     }
};

findFibonacci(10);