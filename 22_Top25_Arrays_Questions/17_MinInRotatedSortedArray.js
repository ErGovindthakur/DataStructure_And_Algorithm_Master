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

console.log(findMinInRotatedSortedArr([3,4,5,2]))