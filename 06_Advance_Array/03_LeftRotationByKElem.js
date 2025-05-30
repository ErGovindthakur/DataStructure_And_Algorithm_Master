// Find left rotation by k element in js
// TMC => O(n)
let leftRotationByKElem1 = (arr, k) => {
  for (let i = 1; i <= k; i++) {
    let copy = arr[0];
    k = Math.floor(k % arr.length);

    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = copy;
  }
  return arr;
};

console.log(leftRotationByKElem1([1, 2, 3, 4, 5], 6));
