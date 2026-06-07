// printing five times "Hello World !" by recursive way

let recursive = (n) => {

     // base case to terminate the recursion
     if(n===0) return;

     console.log("Hello World !");

     // calling the function recursively to print "Hello World !"
     // recursive(n-1);

     // instead of above statement you can use "pre-decrement" unary operator but can't use "post-decrement" unary operator
     recursive(--n);

}

recursive(5);