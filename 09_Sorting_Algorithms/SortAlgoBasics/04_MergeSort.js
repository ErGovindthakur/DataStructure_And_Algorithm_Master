// revising merge sort

let divide = (arr) => {
  let n = arr.length;

  if (n <= 1) return arr;

  let mid = Math.floor(n / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let leftArr = divide(left);
  let rightArr = divide(right);

  return merge(leftArr, rightArr);
};

let merge = (arr1, arr2) => {
  let n1 = 0;
  let n2 = 0;

  let len1 = arr1.length;
  let len2 = arr2.length;

  let mergedArr = [];

  while (n1 < arr1.length && n2 < arr2.length) {
    if (arr1[n1] < arr2[n2]) {
      mergedArr.push(arr1[n1++]);
    } else {
      mergedArr.push(arr2[n2++]);
    }
  }

  while (n1 < arr1.length) {
    mergedArr.push(arr1[n1++]);
  }

  while (n2 < arr2.length) {
    mergedArr.push(arr2[n2++]);
  }

  return mergedArr;
};
console.log(divide([3, 1, 5, 2, 3]));
