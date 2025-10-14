// Find the union of two array

/*
 Example 1:
Input:
n = 5,m = 5.
arr1[] = {1,2,3,4,5}  
arr2[] = {2,3,4,4,5}
Output:
 {1,2,3,4,5}

Explanation: 
Common Elements in arr1 and arr2  are:  2,3,4,5
Distinct Elements in arr1 are : 1
Distinct Elements in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5}
*/

let unionOfArr = (arr1, arr2) => {
  let unionArr = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    // Skip duplicates in arr1 and arr2
    if (arr1[i] === arr2[j] && unionArr[unionArr.length-1]!==arr1[i]) {
     //  if (unionArr[unionArr.length - 1] !== arr1[i]) {
     //    unionArr.push(arr1[i]);
     //  }
     unionArr.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j] && unionArr[unionArr.length-1]!==arr1[i]) {
     //  if (unionArr[unionArr.length - 1] !== arr1[i]) {
     //    unionArr.push(arr1[i]);
     //  }
     unionArr.push(arr1[i]);
      i++;
    } else {
      if (unionArr[unionArr.length - 1] !== arr2[j]) {
        unionArr.push(arr2[j]);
      }
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    if (unionArr[unionArr.length - 1] !== arr1[i]) {
      unionArr.push(arr1[i]);
    }
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    if (unionArr[unionArr.length - 1] !== arr2[j]) {
      unionArr.push(arr2[j]);
    }
    j++;
  }

  return unionArr;
};

console.log(unionOfArr([1, 2, 3, 4, 5], [2, 3, 3, 4, 4, 5]));
