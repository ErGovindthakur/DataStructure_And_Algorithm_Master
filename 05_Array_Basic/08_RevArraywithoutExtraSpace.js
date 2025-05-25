// Reverse an array without extra space

let arr = [1,4,7,3,9,6,10];
let start = 0;
let end = arr.length-1;


while(start<end){
     let temp = arr[start];
     arr[start] = arr[end];
     arr[end] = temp;
     start++;
     end--;
};

console.log(arr);