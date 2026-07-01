// Revising Insertion sort

let insertionSort = (arr) => {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let current = arr[i];

    console.log(arr[j], current);
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    break
    arr[j + 1] = current;
  }
  return arr;
};
console.log(insertionSort([5, 3, 4, 1]));
