let mergeSortedArr = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let i = 0;
  let j = 0;
  let k = 0;

  let mergedArr = [];

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      if (arr1[i] === 0) {
        i++;
      } else {
        mergedArr[k++] = arr1[i++];
      }
    } else {
      if (arr2[j] === 0) {
        j++;
      } else {
        mergedArr[k++] = arr2[j++];
      }
    }
  }

  while (i < n1) {
    mergedArr[k++] = arr1[i++];
  }
  while (j < n2) {
    mergedArr[k++] = arr2[j++];
  }
  return mergedArr;
};
// console.log(mergeSortedArr([1, 2, 3, 0, 0, 0], [2, 5, 6]));
// console.log(mergeSortedArr([1],[0]));
// console.log(mergeSortedArr([1],[]));

// Merging sorted Array In-place means without using extra spaces

let merge = (arr1, m, arr2, n) => {
  // since we are starting merging elem from rear
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (arr1[i] > arr2[j]) {
      arr1[k] = arr1[i];
      k--;
      i--;
    } else {
      arr1[k] = arr2[j];
      k--;
      j--;
    }
  }
  while (i >= 0) {
    arr1[k--] = arr1[i--];
  }
  while (j >= 0) {
    arr1[k--] = arr2[j--];
  }
  return arr1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [0], 0));
console.log(merge([1], 1, [], 0));
