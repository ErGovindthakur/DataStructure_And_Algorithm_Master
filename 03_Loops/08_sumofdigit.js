// Find the sum of digit using while loop

let sumOfDigit = (digit) => {
     let sum = 0;
     digit = Number(digit);

     if(digit > 0 || isNaN(digit)){
          return "Enter a valid digit";
     }
     
     while(digit !== 0){
          let rem = digit % 10;
          sum += rem;
          digit = Math.floor(digit/10);
     }
     return sum;
};

let givenDigit = "18a";
console.log(`Sum of given ${givenDigit} digit = ${sumOfDigit(givenDigit)}`);

// TMC => O(logN) and SPC => O(1)