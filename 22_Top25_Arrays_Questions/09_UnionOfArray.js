let unionOfArray = (arr1, arr2) => {
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  let unionArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
        unionArr.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
        unionArr.push(arr1[i]);
      }
      i++;
      console.log("secondly executed");
    } else {
      if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
        unionArr.push(arr2[j]);
        console.log("Firstly executed");
      }
      j++;
    }
  }

  // checking for remaining elem
  while (i < arr1.length) {
    if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr1[i]) {
      unionArr.push(arr1[i]);
     }
     i++;
  }
  while (j < arr2.length) {
    if (unionArr.length === 0 || unionArr[unionArr.length - 1] !== arr2[j]) {
      unionArr.push(arr2[j]);
     }
     j++;
  }
  return unionArr;
};
console.log(unionOfArray([3, 2, 4], [1, 2, 1, 5]));
