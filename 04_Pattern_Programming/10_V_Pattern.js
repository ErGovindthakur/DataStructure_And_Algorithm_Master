// printing "V" pattern in js

let prompt = require("prompt-sync")();

let rows = Number(prompt("Enter the number of rows -: "));
let cols = Number(prompt("Enter the number of cols -: "));

for(let i = 1; i<=rows; i++){
     for(let j=1; j<=cols; j++){
          // if (i==j || i+j==cols)
          if (i==j || i+j==cols){
               process.stdout.write("*");
          }
          process.stdout.write(" ");
     }
     console.log();
}