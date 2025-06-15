// Find sum of n natural number using recursion


let sumOfNaturalNum  = (n) => {

     if(n===1) return n;

     return n+sumOfNaturalNum(n-1);
}

console.log(sumOfNaturalNum(5));


let factOfNaturalNum  = (n) => {
     if(n==1) return n; // always return "n" the actual val, when your prev fn state return some values

     return n*factOfNaturalNum(n-1);
}

console.log(factOfNaturalNum(3));