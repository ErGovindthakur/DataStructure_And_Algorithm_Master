// printing hollow square with 5 rows and cols

let prompt = require("prompt-sync")();

let star = prompt("Enter the number of stars -: ")
for(let row = 1; row<=star; row++){
     for(let cols = 1; cols<=star; cols++){
          if((row==1 || row==star) || (cols==1 || cols==star)){
               process.stdout.write("*");
          }else{
               process.stdout.write(" ");
          }
     }
     console.log();
}

// TMC => O(n^2) and SPC => O(1)