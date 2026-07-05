// exploring quick sort

let partition = (arr, low, high) => {
  let pivot = arr[high];

  // End of the smaller-elements area
  let i = low - 1;

  // j checks every element except the pivot
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      // Expand the smaller area
      i = i + 1;

      // Move the smaller element into that area
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Put pivot immediately after all smaller elements
  let temp = arr[high];
  arr[high] = arr[i + 1];
  arr[i + 1] = temp;

  // Return pivot's final position
  return i + 1;
};

let quickSort = (arr, low, high) => {
  // base case
  if (low >= high) return;

  let pivotIndex = partition(arr, low, high);

  quickSort(arr, low, pivotIndex - 1);
  quickSort(arr, pivotIndex, high);
};
let arr = [3, 2, 1, 4, 9, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
