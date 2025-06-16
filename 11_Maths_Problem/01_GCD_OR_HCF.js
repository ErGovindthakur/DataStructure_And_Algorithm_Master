// Exploring "Greatest common Divisor" or "Highest common Factor"


// brute force approach to solve GCD or HCF problem

let findGcdOrHcf = (num1,num2) => {

     let max = Math.min(num1, num2);
     
     for(let i = max; i>=1; i--){
          if((num1%i === 0) && (num2%i===0)){
               return i;
          }
          // console.log(i)
     }

}
console.log(findGcdOrHcf(24,32));