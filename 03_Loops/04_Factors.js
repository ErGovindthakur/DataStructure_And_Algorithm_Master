// Find the factors of any number

// Factors -> If a number is being divided completely (means reminder must be zero)  by all the numbers which are coming under that particular number, then all the numbers can be called factors of the particular number.

// eg -: 12(num) => 1,2,3,4,6,12(these are factors of 12)

let findFactors = (num) => {
     num = Number(num);

     if(isNaN(num) || num<=0) return "Enter a valid num must be greater than zero";

     // for(let i=0; i<=Math.floor(num/2); i++){
     //      if(num%i === 0){
     //           console.log(i);
     //           // TMC => O(n) and SPC => O(1)
     //      }
     // }
     for(let i=1; i<=Math.floor(num/2); i++){
          if(num%i === 0){
               console.log(i);
               // TMC => O(Root n) and SPC => O(1)
          }
     }
     return `The actual num => ${num}`;
};

console.log(findFactors(6));