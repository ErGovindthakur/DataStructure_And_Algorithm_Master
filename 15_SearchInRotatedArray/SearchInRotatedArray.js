// Exploring a leetCode medium level problem

let searchInRotatedArray = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;

  // base case
  while (first <= last) {

    let mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) return mid;

    // left sorted part
    if (arr[first] <= arr[mid]) {

      if (target >= arr[first] && target < arr[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }

    } else {

      // left sorted part
      if (target > arr[mid] && target <= arr[last]) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }

    }
  }
  return -1;
};

console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2, 3], 1));

// TMC => O(logN) and SPC => O(1)