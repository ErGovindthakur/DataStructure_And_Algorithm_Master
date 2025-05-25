// Find the max element of an array

let arr = [1,4,7,3,9,6,10];

let max = arr[0]; // assuming zeroth index is max element

for(let i=1; i<arr.length; i++){ // here starting traversal from 1st index;
     if(arr[i]>max){
          max = arr[i];
     }
};

console.log(`The max element is ${max}`);