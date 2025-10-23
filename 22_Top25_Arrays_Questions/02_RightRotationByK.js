let rightRotationByK = (arr, n) => {
  if (arr.length <= 1) return arr;
  let k = Math.floor(n % arr.length);
  for (let j = 0; j < k; j++) {
    let copy = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
      arr[arr.length - i - 1] = arr[arr.length - i - 2];
    }
    arr[0] = copy;
  }

  return arr;
};
// TMC => O(n^2), SPC => O(1)
console.log(rightRotationByK([1, 2, 3, 4, 5], 2));
