// Find factorial of any number

let findFactorial = (num) => {
     let fact = 1;
     num = Number(num);

     // Regular brute force approach
     // if(isNaN(num)){
     //      return "Enter a valid input";
     // }else{
     //      if(num<=0){
     //           return "Inter a positive number greater than zero";
     //      }else{
     //           for(let n = num; n>=1; n--){
     //                fact*= n;
     //           }
     //      }
     // }


     // optimized code version
     if(isNaN(num) || num<=0) return "Enter a valid num must be greater than 0";
     while(num>0){
          fact*=num--;
     }
     return `The factorial of Given num = ${fact}`;
};


// TMC => O(n) and SPC => O(1)
console.log(findFactorial(7));