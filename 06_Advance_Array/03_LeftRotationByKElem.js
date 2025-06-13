// Find left rotation by k element in js
// TMC => O(n)
let leftRotationByKElem1 = (arr, k) => {
  k = Math.floor(k % arr.length);
  for (let i = 1; i <= k; i++) {
    let copy = arr[0];

    for (let j = 0; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = copy;
  }
  return arr;
};
// TMC => O(n^2) and SPC => O(1)
// console.log(leftRotationByKElem1([1, 2, 3, 4, 5], 2));

let arr = [1,2,3,4,5];
let k = 2;
let leftRotationByKElem2 = (i,j) => {

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

};
leftRotationByKElem2(0,k-1); // index 0 to index k(2)-1 => Reverse
leftRotationByKElem2(k,arr.length-1); // index k(2) to last index => reverse
leftRotationByKElem2(0,arr.length-1); // index 0 to last index reverse

console.log(arr);

// TMC => O(n) and SPC => O(1)
