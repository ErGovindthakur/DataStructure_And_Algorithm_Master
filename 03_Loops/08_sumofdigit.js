// Find the sum of digit using while loop

let sumOfDigit = (digit) => {
     let sum = 0;
     while(digit !== 0){
          let rem = digit % 10;
          sum += rem;
          digit = Math.floor(digit/10);
     }
     return sum;
};

let givenDigit = 18;
console.log(`Sum of given ${givenDigit} digit = ${sumOfDigit(givenDigit)}`);