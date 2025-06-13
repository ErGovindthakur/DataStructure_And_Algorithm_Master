// Exploring selection sort in js

let selectionSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {

      if (arr[min] > arr[j]) {
        min = j;
      }

    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};
console.log(selectionSort([5, 2, 7, 8, 3, 9]));

// TMC => O(n^2) and SPC => O(1)