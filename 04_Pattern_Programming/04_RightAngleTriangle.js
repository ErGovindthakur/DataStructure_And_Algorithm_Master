// print right angle triangle with 5 rows and cols accordingly

let prompt = require("prompt-sync")();

let stars = prompt("Enter the numbers of stars -: ");

for(let rows = 1; rows<=stars; rows++){
     for(let cols = 1; cols<=rows; cols++){
          process.stdout.write("* ");
     }
     console.log();
}

// TMC => O(n^2) and SPC => O(1)