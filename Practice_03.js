// Exploring intersection of two array problem

/*
let arr1 = [1, 2, 4, 5];
let arr2 = [2, 3, 5, 7];

Result: [2, 5]
Explanation:
- common in both arrays are 2 and 5

*/

let findIntersection = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let intersectionArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (intersectionArr[intersectionArr.length - 1] !== arr1[i]) {
        intersectionArr.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return intersectionArr;
};
// console.log(findIntersection([1, 2, 4, 5, 9,11], [2, 3, 5, 7,7,7,7,8,8,11]));

// Note array must be sorted for finding intersection and union

// Find the missing number from the given arr

let findMissingNum = (arr) => {
     if(arr.length<2)return arr;

     let actualSum = 0;
     let sum = 0;

     // if array is unsorted take max elem to find actual sum
     let max = Math.max(...arr);

     for(let i = 0; i<arr.length; i++){
          sum +=arr[i];
     }
     for(let i = 1; i<=max; i++){
          actualSum += i;
     }

     return actualSum - sum;
}
console.log("Missing Number => ",findMissingNum([1,2,4,5]));