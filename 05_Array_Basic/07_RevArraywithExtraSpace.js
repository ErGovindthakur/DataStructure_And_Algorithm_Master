// Reversing an array without an extra space

let arr = [1,4,7,3,9,6,10];
let revArray = [];
let j = 0;
for(let i = arr.length-1; i>=0; i--){
     revArray[j] = arr[i];
     j++;
};
console.log(revArray);