// Find the sum of digits

let myDigit = 99999;
let sumOfDigit = 0;
while(myDigit>0){
     let rem = myDigit%10;
     sumOfDigit += rem;
     myDigit = Math.floor(myDigit/10);
}
console.log("sumOfDigit ", sumOfDigit);

// TMC => O(logN) and SPC => O(1)