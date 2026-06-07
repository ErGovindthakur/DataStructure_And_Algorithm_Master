// Find 2nd max element into an array

let arr = [1,4,7,3,9,6,10,10,10];

// Defining max and sMax

let max = Math.max(arr[0],arr[1]);
let sMax = Math.min(arr[0],arr[1]);

// Traversing over arr from 3rd index

for(let i=2; i<arr.length; i++){
     if(arr[i]>max){
          sMax = max; // let me know why this
          max = arr[i];
     }else if(arr[i]>sMax && arr[i]!==max){
          sMax = arr[i];
     }
};

console.log(`The second max element in array = ${sMax}`);

// TMC => O(n) and SPC => O(1)