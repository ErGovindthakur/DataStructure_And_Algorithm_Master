// Taking data from users and storing it into an array

const prompt = require("prompt-sync")();

// Taking five elements
let store = [];

for(let i = 0; i<=4; i++){
     store[i] = Number(prompt("Enter your values -: "));
};
console.log(store);

// TMC => O(n) and SPC => O(n)