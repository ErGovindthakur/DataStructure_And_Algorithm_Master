// Rotating elem of array right using k element

let RightRotationByKElem = (arr, k) => {
  k = Math.floor(k % arr.length);
  for (let i = 1; i <= k; i++) {
    let copy = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = copy;
  }
  return arr;
};

console.log(RightRotationByKElem([1, 2, 3, 4, 5], 4));
