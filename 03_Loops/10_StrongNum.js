// Find if the given number is either strong number or not

// Strong Number -> A number can be called strong , if the sum of factorial of all the unit of number is equal to actual number

// eg -> 145 -: 1 ka factorial = 1, 4 ka factorial = 24, 5 ka factorial = 120;
// sum of factorial = 1+24+120 = 145 = actual number

let findStrong = (strongNum) => {
     strongNum = Number(strongNum);
     let sum = 0;
     let copy = strongNum;

     if(isNaN(strongNum) || strongNum<0) return "Enter the valid input must be greater than zero";

     while(strongNum > 0){
          let unitDigit = strongNum%10;

          let fact = 1;
          for(let i = 1; i<=unitDigit; i++){
               fact = fact*i;
          }
          sum+=fact;

          strongNum = Math.floor(strongNum/10);
     }

     console.log(sum)
     let isStrong = (sum === copy) ? "Strong Num" : "Not a strong Num";
     return isStrong;
}

console.log(findStrong(145));

// TMC => O(logN) or O(d) , and SPC => O(1)