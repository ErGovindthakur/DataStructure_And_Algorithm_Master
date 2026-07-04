// Re-exploring all sorting algos

// 1. Bubble Sort

let bubbleSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
     let isSorted = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = false;
      }
    }
    if(isSorted)break;
  }
  return arr;
};
// console.log(bubbleSort([3, 1, 2, 5, 6, 4]));

// 2. Selection Sort

let selectionSort = (arr) => {
     let n = arr.length;

     for(let i = 0; i<n; i++){
          let min = i;

          for(let j = i; j<n; j++){
               if(arr[j]<arr[min]){
                    min = j;
               }
          }

          if(min != i){
               let temp = arr[min];
               arr[min] = arr[i];
               arr[i] = temp;
          }
     }
     return arr;
}
// console.log(selectionSort([3, 1, 2, 5, 6, 4]))

// 3. Insertion Sort

let insertionSort = (arr) => {
     let n = arr.length;

     for(let i = 1; i<n; i++){
          let current = arr[i];
          let j = i-1; // the actual game is here

          while(j>=0 && arr[j]>current){
               arr[j+1] = arr[j];
               j--;
          }

          arr[j+1] = current;
     }
     return arr;
}
// console.log(insertionSort([3, 1, 2, 5, 6, 4]));

// 4. Merge Sort

// actual merging algo
let merge = (arr1,arr2) => {
     let i = 0;
     let j = 0;
     let mergedArr = [];

     while(i<arr1.length && j<arr2.length){
          if(arr1[i]<arr2[j]){
               mergedArr.push(arr1[i++]);
          }else{
               mergedArr.push(arr2[j++]);
          }
     }

     while(i<arr1.length){
          mergedArr.push(arr1[i++]);
     }
     while(j<arr2.length){
          mergedArr.push(arr2[j++]);
     }
     return mergedArr;
}

let divide = (arr) => {
     let n = arr.length;

     if(n<=1)return arr;

     let mid = Math.floor(n/2);
     let leftPart = arr.slice(0,mid);
     let rightPart = arr.slice(mid);

     // now getting the array division recursively
     let sortedLeft = divide(leftPart);
     let sortedRight = divide(rightPart);

     return merge(sortedLeft,sortedRight);
}
console.log(divide([3, 1, 2, 5, 6, 4]));


