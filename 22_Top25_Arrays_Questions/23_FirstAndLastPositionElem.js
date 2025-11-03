let firstAndLastIdxOfTarget = (arr,target) => {

     if(arr.length === 0) return [-1,-1];
     let first = -1;
     let last = -1;

     for(let i = 0; i<arr.length; i++){
          if(arr[i]===target){
               if(first === -1) first = i;
               last = i;
          }
     }
     return [first,last];
}
// console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],8));
// console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],6));
// console.log(firstAndLastIdxOfTarget([],0));

let searchFirstAndLastIndex = (arr, target) => {
  const findIndex = (findFirst) => {
    let low = 0, high = arr.length - 1;
    let ans = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (arr[mid] === target) {
        ans = mid;
        if (findFirst) {
          high = mid - 1; // keep searching left side
        } else {
          low = mid + 1; // keep searching right side
        }
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return ans;
  };

  return [findIndex(true), findIndex(false)];
};

// Example runs
console.log(searchRange([5,7,7,8,8,10], 8)); // [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1,-1]
console.log(searchRange([], 0));             // [-1,-1]
