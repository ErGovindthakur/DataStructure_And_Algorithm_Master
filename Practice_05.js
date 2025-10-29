// Exploring all the sorting algos


// 1. Bubble sort
let bubbleSort = (arr) => {
     let n = arr.length;
     if(n<2)return arr;

     for(let i = 0; i<n; i++){// it track all the passes
          let isSwapped = false; // track is array is already sorted
          for(let j = 0; j<n-1-i; j++){ // actual sorting occurs here by swapping largest to smallest number
               if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
               }
          }
          if(!isSwapped){
               break;
          }

     }
     return arr;
}
// console.log(bubbleSort([7,1,5,3,2]));

// 2. selection sort (It selects min elem and swaps it to right position elem)

let selectionSort = (arr) => {
     let n = arr.length;
     if(n<2)return arr;

     for(let i = 0; i<n; i++){
          let min = i;

          for(let j = i; j<n; j++){
               if(arr[j]<arr[min]){
                    min = j;
               }
          }
          if(min !== i){
               let temp = arr[i];
               arr[i] = arr[min];
               arr[min] = temp;
          }
     }
     return arr;
}
// console.log(selectionSort([7,1,5,3,2]))

// 3. Insertion sort
let insertionSort = (arr) => {
      let n = arr.length;
      if(n<2)return arr;

      for(let i = 1; i<n; i++){
          let key = arr[i];
          let j = i - 1;

          while(j>=0 && arr[j]>key){
               arr[j+1] = arr[j];
               j--;
          }

          arr[j+1] = key;
      }
      return arr;
}
// console.log(insertionSort([7,1,5,3,2]));

// 4. Merge sort (divide and conquer approach)

let mergeArr = (arr1,arr2) => {
     let i = 0;
     let j = 0;
     let result = [];

     while(i<arr1.length && j<arr2.length){
          if(arr1[i]<arr2[j]){
               result.push(arr1[i]);
               i++;
          }else{
               result.push(arr2[j]);
               j++;
          }
     }

     // checking for reaming elem
     while(i<arr1.length){
          result.push(arr1[i]);
          i++;
     }
     while(j<arr2.length){
          result.push(arr2[j]);
          j++;
     }

     return result;
}
// console.log(mergeArr([3,7,9],[1,2,4,6,8]));
let divide = (arr) => {
     // base case
     if(arr.length==1)return arr;

     let mid = Math.floor(arr.length/2)
     let left = arr.slice(0,mid);
     let right = arr.slice(mid);

     let sortedLeft = divide(left);
     let sortedRight = divide(right);

     return mergeArr(sortedLeft,sortedRight);
}
// console.log(divide([3,7,9,1,2,4,6,8]))

// 5. quick sort

let quickSort = (arr) => {

     if(arr.length<=1)return arr;

     let pivot = arr[arr.length-1];
     let left = [];
     let right = [];

     for(let i = 0; i<arr.length-1; i++){
          if(arr[i]<pivot){
               left.push(arr[i]);
          }else{
               right.push(arr[i]);
          }
     }
     return [...quickSort(left),pivot,...quickSort(right)];
}
console.log(quickSort([3,7,9,1,2,4,6,8]))