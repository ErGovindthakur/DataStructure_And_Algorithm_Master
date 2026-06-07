let insertionSort = (arr) => { //[ 4, 2, 1, 3, 5, 6 ]
  let n = arr.length;
  console.log("Initial Array:", arr);

  for (let i = 1; i < n; i++) {
    let key = arr[i];       // pick element to insert
    let j = i - 1;          // compare with left elements
    console.log(`\nPass ${i}: key = ${key}`);

    // shifting larger elements
    while (j >= 0 && arr[j] > key) {
      console.log(
        `Comparing arr[${j}] = ${arr[j]} > key = ${key} ✅ -> shifting, but also look at j = ${j}`
      );
      arr[j + 1] = arr[j];
      console.log("Array after shift:", arr);
      j--;
    }

    console.log(
      `Insert key = ${key} at position ${j + 1} (before: ${arr[j] ?? "start"})`
    );
    arr[j + 1] = key;

    console.log("Array after inserting key:", arr);
  }

  console.log("\nFinal Sorted Array:", arr);
  return arr;
};

console.log(insertionSort([4, 2, 1, 3, 5, 6]));
