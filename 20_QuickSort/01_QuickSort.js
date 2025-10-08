// Exploring quick sort very first time

let quickSort = (arr) => {
     // base condition
     if(arr.length<=1)return arr;

     let pivot = arr[arr.length-1];
     let left = [];
     let right = [];

     console.log("Original Array -: ", arr);
     console.log("Pivot -: ",pivot);
     for(let i = 0; i<arr.length-1; i++){
          if(arr[i]>pivot){
               right.push(arr[i]);
               console.log("Right part -: ", right);
          }else{
               left.push(arr[i]);
               console.log("Left part -: ", left);
          }
     }

     // returning and merging all the elem
     return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([5, 3, 8, 4, 2, 7, 1, 10]))