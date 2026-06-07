// Print the "N" to One 

let printUptoOne = (n) => {

     // Applying base condition

     if(n==10) return;

     console.log(n);

     // printing value n to 1
     // printUptoOne(--n);

     // printing value 1 to n
     printUptoOne(++n);
}

printUptoOne(1);


// Note => Always write base case condition to terminate function call on the top of code 