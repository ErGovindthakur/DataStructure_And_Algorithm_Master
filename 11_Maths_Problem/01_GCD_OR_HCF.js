// Exploring "Greatest common Divisor" or "Highest common Factor"

// brute force approach to solve GCD or HCF problem

let findGcdOrHcf = (num1, num2) => {
  let max = Math.min(num1, num2);

  for (let i = max; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
    // console.log(i)
  }
};
// console.log(findGcdOrHcf(24,32));

// Solving the same problem with optimized way via "Euclidean Algorithm"

// 1. Iterative Approach
let gcd = (a,b) => {
    while(b!==0){
        let temp = b; // 32, 20, 12, 8, 4
        b = a % b;    // 20, 12, 8,  4, 0
        a = temp;     // 32, 20, 12, 8, 
    }
    return a;
}

console.log(gcd(20,32));