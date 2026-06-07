// Creating a full triangle 

const prompt = require("prompt-sync")();
let stars = Number(prompt("Enter the number of stars -: "))
let fullTriangle = () => {

     // Main loop
     for(let i = 1; i<=stars; i++){
          // printing the leading space
          for(let j = 1; j<=stars-i; j++){
               // process.stdout.write("_");
               process.stdout.write(" ");
          }
          // printing the symmetrical triangle
          for(let k =1; k<=2*i-1; k++){
               process.stdout.write("*");
          }
          console.log();
     }
}
fullTriangle();