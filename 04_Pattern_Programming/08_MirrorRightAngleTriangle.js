// Printing mirror right angle triangle with five rows and cols accordingly

let prompt = require("prompt-sync")();

let space = prompt("Enter the numbers of stars -: ");

for(let i = 1; i<=space; i++){
     
     // Inverted right angle triangle
     for(let j = 1; j<=space-i; j++){
          process.stdout.write(" ");
     }

     // Simple right angle triangle
     for(let k = 1; k<=i; k++){
          process.stdout.write("*");
     }

     console.log()
}
