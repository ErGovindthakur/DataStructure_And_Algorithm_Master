// Printing mirror right angle triangle with five rows and cols accordingly

let prompt = require("prompt-sync")();

let space = prompt("Enter the numbers of stars -: ");

// Inverted right angle triangle
for(let i = 1; i<=space; i++){

     for(let j = 1; j<=space-i; j++){
          process.stdout.write(" ");
     }
     for(let k = 1; k<=i; k++){
          process.stdout.write("*");
     }

     console.log()
}
