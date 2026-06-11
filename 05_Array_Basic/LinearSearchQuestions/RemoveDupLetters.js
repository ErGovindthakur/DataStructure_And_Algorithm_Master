let removeDupLetters = (letters) => {
  if (letters.length < 2) return letters;

  letters = letters.split("").sort();
  let arrLetter = [];

  for (let i = 0; i < letters.length; i++) {
    if (arrLetter.includes(letters[i])) {
      i++;
    } else {
      arrLetter.push(letters[i]);
    }
  }
  return arrLetter.join("");
};
// TMC = O(n^2) and SPC = O(n)
// console.log(removeDupLetters("cab"))
console.log(removeDupLetters("cbacdcbc"));
