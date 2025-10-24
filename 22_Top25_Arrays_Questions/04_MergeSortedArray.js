let mergeSortedArr = (arr1,arr2) => {
     let i = 0;
     let j = 0;
     let mergedArr = [];

     while(i<arr1.length && j<arr2.length){
          if(arr1[i]<arr2[j]){
               mergedArr.push(arr1[i]);
               i++;
          }else{
               mergedArr.push(arr2[j]);
               j++;
          }
     }

     // check for remaining elem
     while(i<arr1.length){
          mergedArr.push(arr1[i]);
          i++;
     }
     while(j<arr2.length){
          mergedArr.push(arr2[j]);
          j++;
     }

     return mergedArr;
}

console.log(mergeSortedArr([5,7,9],[1,6,8]));