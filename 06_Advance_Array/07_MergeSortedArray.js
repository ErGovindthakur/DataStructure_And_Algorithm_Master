// Merge two sorted array using js

let MergeTwoSortedArray = (arr1,arr2) => {

     let i = 0; // index for arr1
     let j = 0; // index for arr2
     let k = 0; // index for mergeArr

     // creating a merge array

     let mergeArr = new Array(arr1.length-1 + arr2.length-1);
     
     while(i<arr1[i] && j<arr2[j]){
          if(arr1[i]<arr2[j]){
               mergeArr[k] = arr1[i];
               i++;
               k++;
          }else{
               mergeArr[k] = arr2[j];
               j++;
               k++;
          }
     }
     return mergeArr;
}
console.log(MergeTwoSortedArray([2,5,8],[1,4,7,9]));
