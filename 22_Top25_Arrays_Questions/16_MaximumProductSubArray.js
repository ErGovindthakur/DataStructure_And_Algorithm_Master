let maximumProductSubArray = (arr) => {
     let n = arr.length;
     if(n<1)return arr;

     let product = 1;
     let maxProduct = 1;

     for(let i = 0; i<n; i++){
          product *= arr[i];

          if(product>maxProduct){
               maxProduct = product;
          }

          if(product<0){
               product = 1;
          }
     }
     return maxProduct;
}

// console.log(maximumProductSubArray([2,3,-2,4]));


let maximumProductSubArray2 = (arr) => {
  let n = arr.length;
  if (n === 0) return 0;

  let maxSoFar = arr[0];
  let minSoFar = arr[0];
  let result = arr[0];

  for (let i = 1; i < n; i++) {
    let curr = arr[i];

    // Compute possible candidates manually
    let tempMax = maxSoFar * curr;
    let tempMin = minSoFar * curr;

    // Now we manually decide which should become new max/min
    if (curr >= 0) {
      maxSoFar = tempMax > curr ? tempMax : curr;
      minSoFar = tempMin < curr ? tempMin : curr;
    } else {
      // when curr < 0, roles reverse
      maxSoFar = tempMin > curr ? tempMin : curr;
      minSoFar = tempMax < curr ? tempMax : curr;
    }

    // Track global result
    result = result > maxSoFar ? result : maxSoFar;
  }

  return result;
};

console.log(maximumProductSubArray2([2, 3, -2, 4]));   // 6
console.log(maximumProductSubArray2([-2, 3, -4]));     // 24
console.log(maximumProductSubArray2([-1, -2, -3, 0])); // 6
