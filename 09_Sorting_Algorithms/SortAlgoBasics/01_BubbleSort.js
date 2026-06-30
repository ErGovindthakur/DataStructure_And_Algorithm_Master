let bubbleSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
       // this optimization line
       let isSorted = true;

    // console.log(`Pass : ${i}`,arr)

    for (let j = 0; j < n - i-1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false;
      }
    }

    if (isSorted) {
      break;
    }
  }
  return arr;
};
console.log(bubbleSort([3, 1, 4, 6, 2, 0]));
console.log(bubbleSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
