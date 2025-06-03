// Merge two sorted array using js

let MergeTwoSortedArray = (arr1,arr2) => {

     let i = 0; // index for arr1
     let j = 0; // index for arr2
     let k = 0; // index for mergeArr

     // creating a merge array

     let mergeArr = new Array(arr1.length + arr2.length);
     
     while(i<arr1.length && j<arr2.length){
          if(arr1[i]<arr2[j]){
               mergeArr[k++] = arr1[i++];

          }else{
               mergeArr[k++] = arr2[j++];
          }
     }

     // Writing condition for if arr1's length is greater than arr2's length

     while(i<arr1.length){
          mergeArr[k++] = arr1[i++];
     }
     while(j<arr2.length){
          mergeArr[k++] = arr1[j++]
     }

     return mergeArr;
}
console.log(MergeTwoSortedArray([1,4,7,9,10],[2,5,8]));
