// Exploring insertion sort using js

let arr = [4, 2, 1, 3, 5, 6];
let n = arr.length;

for (let i = 1; i < n; i++) {
  let key = arr[i]; // storing each elem as key
  let j = i - 1;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = key;
}

console.log(arr);

// TMC => O(m*n) = O(n^2) , where n may be negligible  and SPC => O(1)