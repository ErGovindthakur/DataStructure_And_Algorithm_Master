// Exploring bubble sort in js very first time

// What is bubble sort ? 
// -> Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

// Why it's called "Bubble"  sort ? 
// -> Because the largest elements "bubble up" to the end of the array in each pass — just like bubbles rising to the surface.

let arr = [3,4,7,8,2];
let n = arr.length;
for(let i = 0; i<n-1; i++){
     for(let j = 0; j<n-1-i; j++){
          if(arr[j]>arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
          }
     }
}
console.log(arr);

// TMC => O(n^2) and SPC = O(1)