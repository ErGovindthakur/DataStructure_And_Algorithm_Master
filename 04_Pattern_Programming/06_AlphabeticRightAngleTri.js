// Printing alphabetic right angle triangle with A to E

// Print right angle triangle with increasing num 1 to 5

let prompt = require("prompt-sync")();

let stars = prompt("Enter the numbers of stars -: ");

for(let i = 1; i<=stars; i++){
     let ascii = 65;
     for(let j = 1; j<=i; j++){
          process.stdout.write(`${String.fromCharCode(ascii)} `);
          ascii++;
     }
     console.log();
}


// Note => 
// Remember this one to convert ascii num to alphabet 
// (String.fromCharCode(ascii))