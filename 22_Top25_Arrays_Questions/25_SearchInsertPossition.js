let searchInsertPosition = (arr,target) => {
     if(arr.length < 2) return arr;

     let st = 0;
     let end = arr.length-1;

     while(st<=end){
          let mid = Math.floor((st+end)/2);

          console.log(`Mid -> ${arr[mid]}`);
          if(arr[mid]===target)return mid;

          if(arr[mid]<target){
               st = mid+1
          }else{
               end = mid-1;
          }
     }
     return st;
}
console.log(searchInsertPosition([1,3,5,6],5));
console.log(searchInsertPosition([1,3,5,6],2));
console.log(searchInsertPosition([1,3,5,6],7));