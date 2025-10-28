let findMinInRotatedSortedArr = (arr) => {
     if(!arr || arr.length==0)return "Unable to find min elem";

     let low = 0;
     let high = arr.length-1;

     // for unsorted array
     if(arr[low]<arr[high]){
          return arr[low];
     }

     while(low<high){
          let mid = Math.floor((low+high)/2);

          if(arr[mid]>arr[high]){
               low = mid + 1;
          }else{
               high = mid;
          }
     }

     return arr[low];
}

// console.log(findMinInRotatedSortedArr([3,4,5,2]));
let findMaxInRotatedSortedArr = (arr) => {
  if (!arr || arr.length === 0) return "Array empty";

  let start = 0;
  let end = arr.length - 1;

  // If array is not rotated at all
  if (arr[start] < arr[end]) return arr[end];

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // If mid element is greater than next one => mid is max
    if (arr[mid] > arr[mid + 1]) return arr[mid];

    // If mid element is less than previous => previous is max
    if (arr[mid] < arr[mid - 1]) return arr[mid - 1];

    // Otherwise decide which side to go
    if (arr[mid] > arr[start]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return arr[start];
};

console.log(findMaxInRotatedSortedArr([3,4,5,1,2])); // 5
console.log(findMaxInRotatedSortedArr([4,5,6,7,0,1,2])); // 7
console.log(findMaxInRotatedSortedArr([1,2,3,4,5])); // 5
