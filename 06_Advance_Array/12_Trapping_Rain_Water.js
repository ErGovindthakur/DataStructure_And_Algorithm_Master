// Trapping Rain water problem
// arr = [4,2,0,3,2,5]; output = 9

let heightArr = [4,2,0,3,2,5];
let leftArr = new Array(heightArr.length); // first arr
let rightArr = new Array(heightArr.length); // second arr

let maxLeft = heightArr[0]; // max left = 4
let maxRight = heightArr[heightArr.length -1]; // maxRight = 5;

leftArr[0] = maxLeft; // 4
rightArr[heightArr.length - 1] = maxRight;//5

let totalWater = 0;


for(let i = 1; i<heightArr.length; i++){
     // filling leftArr
     maxLeft = Math.max(heightArr[i],maxLeft);
     leftArr[i] = maxLeft;
}
for(let i = heightArr.length-2; i>=0; i--){
       // filling rightArr
     maxRight = Math.max(heightArr[i],maxRight);
     rightArr[i] = maxRight;
}
for(let i = 0; i<heightArr.length; i++){
     totalWater += (Math.min(leftArr[i],rightArr[i]) - heightArr[i]);
}
console.log(leftArr)
console.log(rightArr)
console.log(totalWater);