// Taking data from users and storing it into an array

// const prompt = require("prompt-sync")();

import { stdin, stdout } from "node:process";
import readline from "node:readline/promises";

let maxLen = 5;
let len = 0;

let takeArrInp = async () => {
  let arr = [];
  let rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  try {
    while (len < maxLen) {
      let remaining = maxLen - len;
      // Added Number() conversion to match your comment requirements
      let elem = await rl.question(
        `Enter element ${len} (Remaining: ${remaining}): `
      );

      arr.push(Number(elem)); 
      len++;
    }
    
    console.log("Final Array:", arr);
  } catch (err) {
    console.error("Error occurred:", err);
  } finally {
    // Close once at the very end
    rl.close();
    console.log("Input session closed.");
  }
};

takeArrInp();
// // Taking five elements
// let store = [];

// for(let i = 0; i<=4; i++){
//      store[i] = Number(prompt("Enter your values -: "));
// };
// console.log(store);

// // TMC => O(n) and SPC => O(n)
