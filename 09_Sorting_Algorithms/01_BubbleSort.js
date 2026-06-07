// Exploring bubble sort in js very first time

// What is bubble sort ? 
// -> Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

// Why it's called "Bubble"  sort ? 
// -> Because the largest elements "bubble up" to the end of the array in each pass — just like bubbles rising to the surface.

let bubbleSort = (arr) => {
     let n = arr.length;
     if(arr.length<2)return arr;
     for(let i = 0; i<n-1; i++){
          let isSwapped = false;
          for(let j = 0; j<n-1-i; j++){
               if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwapped = true;
               }
          }
          if(!isSwapped)break;
          console.log("Swapped -> ",i);
     }
     return arr;
}

// console.log(bubbleSort([1,2,3,4,5,6]));
console.log(bubbleSort([9,5,6,4,1,3,2]));
// TMC => O(n^2) and SPC = O(1)