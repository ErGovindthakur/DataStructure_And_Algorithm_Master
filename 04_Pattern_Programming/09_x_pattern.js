// Printing x pattern in js

const prompt = require('prompt-sync')();

let stars = Number(prompt("Enter the number of stars -: "));

for(let i = 1; i<=stars; i++){
     for(let j = 1; j<=stars; j++){
          if(stars%2==0){
               console.log("Plz enter odd number of stars for perfect x pattern");
               return;
          }
           else if(i==j || i+j == stars+1){
               process.stdout.write("*");
          }
          process.stdout.write(" ")
     }
     console.log();
}