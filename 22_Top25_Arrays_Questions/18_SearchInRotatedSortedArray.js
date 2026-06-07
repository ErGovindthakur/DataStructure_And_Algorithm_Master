let searchInRotatedSortedArr = (arr, target) => {
  if (arr.length < 1) return "Target not fount";

  let st = 0;
  let end = arr.length - 1;

  while (st < end) {
    let mid = Math.floor((st + end) / 2);

    if (target === arr[mid]) return mid;

    // left sorted part
    if (arr[st] <= arr[mid]) {
      if (arr[st] <= target && target < arr[mid]) {
        end = mid - 1;
      } else {
        st = mid + 1;
      }
    } else {
      // right sorted part
      if (target > arr[mid] && target <= arr[end]) {
        st = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
console.log(searchInRotatedSortedArr([4, 5, 6, 7, 0, 1, 2], 5));
