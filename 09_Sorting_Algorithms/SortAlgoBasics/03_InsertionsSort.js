let insertionSort = (arr) => {
  let n = arr.length;

  // Start from index 1 because arr[0] alone is already sorted
  for (let i = 1; i < n; i++) {
    // Store the element we want to insert
    let currentElem = arr[i];

    // Start comparing from the previous element
    let j = i - 1;

    // Shift all elements greater than currentElem
    // one position to the right
    while (j >= 0 && arr[j] > currentElem) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert currentElem into its correct position
    arr[j + 1] = currentElem;
  }

  return arr;
};

console.log(insertionSort([3, 1, 6, 4, 2, 5]));