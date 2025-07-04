// Solving find the intersection of two array problem
let j = 0;
let findIntersection = (arr1, arr2) => {
  let outputArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let k = j; k < arr1.length; k++) {
      if (arr1[i] == arr2[k] && !outputArr.includes(arr1[i] || arr2[k])) {
        outputArr.push(arr2[k]);
      }
    }
    j = j + 1;
    console.log(`J = ${j}`)
  }
  return outputArr;
};

console.log(findIntersection([1,2,2,1,3],[1,3,2,1]));

// Time complexity => O(n^2)