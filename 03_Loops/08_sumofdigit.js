// Find the sum of digit using while loop

let sumOfDigit = (digit) => {
     let sum = 0;
     digit = Number(digit);
     while(digit !== 0){
          if(digit > 0 || isNaN(digit)){
               return "Enter a valid digit";
          }
          let rem = digit % 10;
          sum += rem;
          digit = Math.floor(digit/10);
     }
     return sum;
};

let givenDigit = "18a";
console.log(`Sum of given ${givenDigit} digit = ${sumOfDigit(givenDigit)}`);