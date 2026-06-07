// solving the toggle each char of the string problem

let toggleChar = (str) => {
  let toggle = "";

  for (let i = 0; i <= str.length - 1; i++) {
    // str.charCodeAt(index); gives us actual ascii value of particular character
    let ch = str.charCodeAt(i);

    // since we know that => A(65) - Z(90) and a(97) and z(122)
    if (ch >= 65 && ch <= 90) {
      toggle += String.fromCharCode(ch + 32);
      // let assume we have "a"(65) and converting by adding 32 becomes A(97)
    }
    if (ch >= 97 && ch <= 122) {
      toggle += String.fromCharCode(ch - 32);
    }
  }
  return toggle;
};

console.log(toggleChar("GoViNd"));
