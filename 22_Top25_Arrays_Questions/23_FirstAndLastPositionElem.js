let firstAndLastIdxOfTarget = (arr, target) => {
  if (arr.length === 0) return [-1, -1];
  let first = -1;
  let last = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (first === -1) first = i;
      last = i;
    }
  }
  return [first, last];
};
// console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],8));
// console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],6));
// console.log(firstAndLastIdxOfTarget([],0));

let findRange = (arr, target) => {
  let findFirst = (first) => {
    if (arr.length === 0) return [-1, -1];

    let low = 0;
    let high = arr.length - 1;
    let ans = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === target) {
        ans = mid;

        if (first) {
          high = mid - 1; // keep searching left for first
        } else {
          low = mid + 1; // keep searching right for last
        }
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  };

  return [findFirst(true), findFirst(false)];
};
console.log(findRange([5, 7, 7, 8, 8, 10], 8));
