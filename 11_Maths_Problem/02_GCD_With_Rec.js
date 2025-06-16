// solving gcd or hcf problem using recursion

let gcd = (a,b) => {
     // base case
     if(b==0) return b;

     return gcd(b, b%a);
}
console.log(gcd(20,32));