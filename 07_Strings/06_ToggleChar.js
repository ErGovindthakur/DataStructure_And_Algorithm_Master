// solving the toggle each char of the string problem

let toggleChar = (str) => {
  let toggle = "";

  for (let i = 0; i <= str.length - 1; i++) {
    let ch = str.charCodeAt(i);

    if (ch >= 65 && ch <= 96) {
      toggle += String.fromCharCode(ch + 32);
    }
    if (ch >= 98 && ch <= 123) {
      toggle += String.fromCharCode(ch - 32);
    }
  }
  return toggle;
};

console.log(toggleChar("Govind"));
