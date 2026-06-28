// Exploring binary search first time
// Note for applying binary search at any array, must provide sorted array
let binarySearch = (arr,target) => {

     let fIndex = 0;
     let lIndex = arr.length - 1;

     while(fIndex<=lIndex){
          let mid = Math.floor((fIndex+lIndex)/2);

          if(arr[mid]===target) return `Target ${target} found at index ${mid}`;

          if(arr[mid]<target) fIndex = mid + 1;

          if(arr[mid]>target) lIndex = mid - 1;
     }

     return "Target not found";
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13],11));

// TMC => O(long) and SPC => O(1)

let binarySearchAgain =  (arr,target) => {
     let n = arr.length;
     // if(n<2 && arr[0]===target)return true;

     let st = 0;
     let end = n-1;

     while(st<=end){

          let mid = Math.floor((st+end)/2);
          console.log(mid)
          if(arr[mid]===target){
               return true;
          }
          if(arr[mid]<target){
               st = mid + 1;
          }
          if(arr[mid]>target){
               end = mid-1;
          }
     }
     return false;
}
console.log(binarySearchAgain([1,2,3,4,5,6,7,8,9,10,11,12,13],12))