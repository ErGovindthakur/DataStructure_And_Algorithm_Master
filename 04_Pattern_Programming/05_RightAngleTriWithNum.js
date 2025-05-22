// Print right angle triangle with increasing num 1 to 5

let prompt = require("prompt-sync")();

let stars = prompt("Enter the numbers of stars -: ");

for(let i = 1; i<=stars; i++){
     for(let j = 1; j<=i; j++){
          process.stdout.write(`${j} `);
     }
     console.log();
}
