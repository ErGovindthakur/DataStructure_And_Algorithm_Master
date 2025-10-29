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
console.log(bubbleSort([7,1,5,3,2]));