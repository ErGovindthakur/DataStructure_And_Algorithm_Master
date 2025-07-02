// Check if the given sentence is Pangram or not

// Note => Pangram is such type of sentence which contains all the alphabets from a to z at least once

let sentence = ("abcdefghijklmnopqrstuvwxyzRajBaj").toLowerCase();

let set = new Set();
let ch;
for(let i = 0; i<sentence.length; i++){
//    ch = sentence[i]
   ch = (sentence.charAt(i))
   set.add(ch)
}
console.log(set.size)
let isPangram = set.size == 26 ? "Pangram" : "Not a Pangram";
console.log(isPangram)