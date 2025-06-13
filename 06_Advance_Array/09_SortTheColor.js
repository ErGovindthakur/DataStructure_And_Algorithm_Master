// Solve sort the color problem in place

// arr = [1,0,1,2,0,0,1,2] , output = [0,0,0,1,1,1,2,2];

let sortTheColor = (arr) => {
     let i = j = 0;
     let k = arr.length-1;

     while(i<=k){
          if(arr[i]==0){
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
               i++;
               j++;
          }else if(arr[i] == 1){
               i++;
          }
          else{
               let temp = arr[i];
               arr[i] = arr[k];
               arr[k] = temp;
               k--;
          }
     }
     return arr;
}
console.log(sortTheColor([1,0,1,2,0,0,1,2]));

// // Merge two sorted array using js

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


// // Remove duplicate from the sorted array 

let RemoveDuplicate = (arr) => {
     let j = 1;
     for(let i = 0; i<arr.length-1; i++){
          if(arr[i]!=arr[i+1]){
               arr[j] = arr[i+1];
               j++;
          }
     }
     return arr.slice(0,j);
}

console.log(RemoveDuplicate([0,0,1,1,1,2,2,3,3,4,5]));

// // TMC => O(n) and SPC => O(1)