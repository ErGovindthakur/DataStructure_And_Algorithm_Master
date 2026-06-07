// Find Max product pair

let maxProductPair = (arr) => {
  let max1 = -Infinity;
  let max2 = -Infinity;

  let min1 = Infinity;
  let min2 = Infinity;

  // loop to iterate over whole array
  for (let elem of arr) {
    // condition to find two max nums in arr
    if (elem > max1) {
      max2 = max1;
      max1 = elem;
    } else if (elem > max2 && elem < max1) { // just written for extra clarification
      max2 = elem;
    }

    // condition to find two min nums in arr
    if (elem < min1) {
      min2 = min1;
      min1 = elem;
    } else if (elem < min2) {
      min2 = elem;
    }
  }

  let positiveMaxProduct = max1 * max2;
  let negativeMaxProduct = min1 * min2;

  if (positiveMaxProduct > negativeMaxProduct) {
    return [max2, max1];
  }

  return [min1, min2];
};

console.log(maxProductPair([1, 4, 3, 2, 7, 5, 9]));
console.log(maxProductPair([-10, -8, 2, 3]));
