// Find frequency of each char in string

let findFrequency = (str) => {
  let freq = {}; // to store frequency

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === " ") continue;

    if (freq[char]) {
      freq[char] += 1;
    }else{
      freq[char] = 1;
    }
    
  }
  return freq;
};

console.log(findFrequency("Apple Orange Banana"));
