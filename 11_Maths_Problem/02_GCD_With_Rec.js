// solving gcd or hcf problem using recursion

let gcd = (a,b) => {
     // base case
     if(b==0) return a;

     return gcd(b, a%b);
}
console.log(gcd(20,32));