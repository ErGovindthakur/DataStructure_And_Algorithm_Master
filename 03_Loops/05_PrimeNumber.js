// Find weather the number is prime or not

/*
🧮 Core Facts
Definition
A prime number is a natural number greater than 1 that has only two factors: 1 and itself.
Examples: 2, 3, 5, 7, 11, 13...

2 is the only even prime number
Every other even number is divisible by 2, so 2 is the smallest and only even prime number.

Prime numbers are infinite
The Greek mathematician Euclid proved over 2,300 years ago that there is no largest prime number—they go on forever.

🧠 Fun & Surprising Facts
1 is not a prime number
It only has one factor, not two. So it's considered neither prime nor composite.

All primes except 2 and 3 are of the form (6n ± 1)
After 3, all primes fall into the pattern 6n + 1 or 6n - 1 (but not all such numbers are prime).

Prime numbers are used in cryptography
Modern encryption methods (like RSA) rely on the difficulty of factoring very large primes—this keeps your online banking and messaging secure.

The largest known prime (as of 2024)
Is a Mersenne prime:
2^82,589,933 − 1, which has 24,862,048 digits!

Twin primes
Pairs of primes that differ by 2, like (11, 13) or (17, 19), are called twin primes.
It is unknown whether infinitely many twin primes exist!

Palindromic primes
These are prime numbers that read the same forward and backward:
131, 151, 757...

Prime gaps get bigger—but slowly
As numbers get larger, primes get less frequent. But surprisingly, sometimes you'll find two large primes very close to each other.
*/

let findPrime = (num) => {
     num = Number(num);
     // let isPrime = true;

     if(isNaN(num) || num<=0) return "Enter a valid number must be greater than zero";

     // for(let i = 2; i<=Math.floor(num/2); i++){
     //      if(num%i==0){
     //           isPrime = false;
     //      }
     // }
     if(num > 0){
         let isPrime =  primeNum(num);
         return isPrime;
     }

     // return isPrime
}

// optimize the code by a function
let primeNum = (n) => {
     n = Number(n);
     if(n <= 1) return false; // one is not a prime number
     if(n === 2) return true; // 2 is only even prime number
     if(n % 2 === 0) return false;

     for(let i = 3; i<Math.floor(Math.sqrt(n)); i+=2){
          if(n%i === 0) return false;
     }
     return true;
}
console.log(findPrime(11));

// 1. TMC => O(n)
// 2. TMC => O(root n)