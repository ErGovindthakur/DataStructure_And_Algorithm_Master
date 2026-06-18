// 1. Write a function to remove all duplicate elem from a sorted arr

// let arr = [0,0,1,1,1,2,2,3,3,4,4,5,5,6];

let removeDupElem = (arr) => {
     let n = arr.length;

     let j = 0;
     for(let i = 0; i<n; i++){
          if(arr[i]!==arr[j]){
               j++;
               arr[j] = arr[i];
          }
     }
     return arr.slice(0,j+1);
}
// console.log(removeDupElem(arr));

// 2. Write a function to find best time to buy and sell the stock problem

let bestTimeToBuyAndSellStock = (arr) => {
     let minPrice = arr[0];
     let maxProfit = 0;

     let purchasedDate = 0;
     let sellDate = 0;

     for(let i = 0; i<arr.length; i++){
          if(minPrice>arr[i]){
               minPrice = arr[i];
               purchasedDate = arr[i];
          }
          let profit = arr[i] - minPrice;

          if(profit > maxProfit){
               maxProfit = profit;
               sellDate = arr[i];
          }
     }
     return `The purchased price was ${purchasedDate} and buy price is ${sellDate} and maxProfit ${maxProfit}`
};
// console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4]));

// 3. Write a a function to find if an array contains digit and it's double

let digitAndDouble = (arr) => {
     let n = arr.length;
     let freq = {};

     for(let i = 0; i<n; i++){
          if(freq[arr[i]*2] || freq[arr[i]/2]){
               return true;
          }
          freq[arr[i]] = true;
     }
     return false;
}
// console.log(digitAndDouble([2,1,4,5,7]));

// 4. Write a function to count even digit in an array

let countEvenDigit = (arr) => {
     let n = arr.length;
     let evenDigitCount = 0;
     for(let i = 0; i<n; i++){
          if(String(arr[i]).length % 2 === 0){
               evenDigitCount++;
          }
     }
     return evenDigitCount;
}
// console.log(countEvenDigit([1,22,4,234,1213]));

// 5. Write a function to find in an array max consecutive ones

let maxConsecutiveOnes = (arr) => {
     let maxCount = 0;

     let count = 0;
     for(let i = 0; i<arr.length; i++){
          if(arr[i]===1){
               count = count+1;
          }else{
               count = 0;
          }

          if(count > maxCount){
               maxCount = count;
          }
     }
     return maxCount;
}
// console.log(maxConsecutiveOnes([1,0,1,1,0,1,1,1]))

// 6. Write a function to mergeSorted array in place
let merge = (arr1,m, arr2, n) => {
     // here m and n are valid and non-zero elem in both array

     let i = m-1;
     let j = n-1;
     let k = (m+n)-1;

     while(i>=0 && j>=0){
          if(arr1[i]>arr2[j]){
               arr1[k] = arr1[i];
               k--;
               i--;
          }else{
               arr1[k] = arr2[j];
               k--;
               j--;
          }
     }

     while(i>0){
          arr1[k--] = arr1[i--];
     }
     while(j>0){
          arr1[k--] = arr2[j--]
     }
     return arr1
}
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [0], 0));
// console.log(merge([1], 1, [], 0));

// 7. Write a function to move all zeros to the end of array

let moveZerosToEnd = (arr) => {
     let j = 0; // slow pointer

     for(let i = 0; i<arr.length; i++){
          if(arr[i]!==0){
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
               j++;
          }
     }
     return arr;
}
// console.log(moveZerosToEnd([0,1,0,0,12,14,16]));

// 8. Write a function to remove a particular elem from array

let removeElem = (arr,elem) => {
     let st = 0;
     for(let i = 0; i<arr.length; i++){
          if(arr[i]!==elem){
               arr[st] = arr[i];
               st++;
          }
     }
     return arr;
}
console.log(removeElem([1,4,3,8,2,0],8));
console.log(removeElem([3,2,2,3],3))