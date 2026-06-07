let searchAndInsertPosition = (arr,target) => {
     let first = 0;
     let last = arr.length - 1;

     // apply base condition
     while(first<=last){
          let mid = Math.floor((first+last)/2);

          if(arr[mid] === target) return mid;

          if(arr[mid]>target){
               last = mid - 1
          }else{
               first = mid + 1;
          }
     }
     return `${target} Not found, but should be at index ${first}`
}
console.log(searchAndInsertPosition([1,3,5,6],2));

// TMC => O(logN) and SPC => O(1)