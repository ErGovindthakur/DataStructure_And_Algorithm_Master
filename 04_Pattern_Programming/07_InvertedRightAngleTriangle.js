// Printing inverted right angle triangle with 5 rows and cols accordingly

let prompt = require("prompt-sync")();

let stars = prompt("Enter the numbers of stars -: ");

for(let i = stars; i>=1; i--){

     for(let j = i; j>=1; j--){
         process.stdout.write("* ");
     }
     console.log();
}

// TMC => O(n^2) and SPC => O(1)