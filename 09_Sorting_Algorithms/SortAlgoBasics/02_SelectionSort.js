// Revising selection sort

let selectionSort = (arr) => {
  let n = arr.length;

  // loop 1, helps to select minimum value

  for (let i = 0; i < n; i++) {
    let min = arr[0];

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < min) {
        min = j; // here we will get min value
      }
    }

    // now apply swapping logic to place min value at first index

    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};
console.log(selectionSort([3, 1, 5, 4, 2]));
