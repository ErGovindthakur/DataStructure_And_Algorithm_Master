// Printing a square pattern very first time

const prompt = require("prompt-sync")();

const star = prompt("Enter the number of star -> ");

for(let row = 1; row<=star; row++){
     for(let col = 1; col<=star; col++){
          process.stdout.write("* ");
     }
     console.log("");
}
// TMC => O(n^2) and SPC = O(1)