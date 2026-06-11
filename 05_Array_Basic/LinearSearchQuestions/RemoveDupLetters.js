let removeDupLetters = (letters) => {
  if (letters.length < 2) return letters;

  letters = letters.split("").sort();
  let arrLetter = [];

  for (let i = 0; i < letters.length; i++) {
    if (!arrLetter.includes(letters[i])) {
      arrLetter.push(letters[i])
    }
  }
  return arrLetter.join("");
};
// TMC = O(n^2) and SPC = O(n)
// console.log(removeDupLetters("cab"))
console.log(removeDupLetters("cbacdcbc"));


let removeDupLetter2 = (letter) => {
  if(letter.length<2)return letter;

  letter = letter.split("").sort(); // sorting takes O(nlogn) time

  let seen = new Set(); // here is an space created
  let result = []; // here is also space created

  for(let alp of letter){ // here loop runs "n times",
    if(!seen.has(alp)){
      seen.add(alp); // here look up occurs in constant time
      result.push(alp);
    }
  }

  return result.join("");
}
// Overall TMC = O(nlogn) and SPC = O(n)
console.log(removeDupLetter2("abbcdacb"))