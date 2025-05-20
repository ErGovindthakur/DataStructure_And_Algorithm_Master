// Find the sum of n natural numbers

let sumOfGivenNaturalNum = (num) => {
  num = Number(num);
  let sum = 0;
  if (isNaN(num)) {
    return "Enter valid input";
  } else {
    if (num <= 0) {
      return "Number should be positive and greater than zero";
    } else {
      for (let i = 1; i <= num; i++) {
        sum += i;
      }
    }
  }
  return `Sum of ${num} natural number = ${sum}`;
};

console.log(sumOfGivenNaturalNum("abc"));
