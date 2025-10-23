let removeDuplicateFromSortedArr = (arr) => {
     if(arr.length<=1) return arr;

     let n = arr.length;
     let i = 0;
     let j = 0;
     for(let k = 0; k<n; k++){
          if(arr[k]==arr[k+1]){
               j++;
               console.log(`j -> ${j}`);
          }else{
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
               i++;
               j++;
          }
     }
     return arr.slice(0,i);
}
// console.log(removeDuplicateFromSortedArr([1,1,1,2,2,3,3,4,5,6,7,7,8,8,9]));
// console.log(removeDuplicateFromSortedArr([1,1,2,3,3]))
// console.log(removeDuplicateFromSortedArr([1,2,2,2,3,3,4,4,5]));
// console.log(removeDuplicateFromSortedArr([1,1,1]))