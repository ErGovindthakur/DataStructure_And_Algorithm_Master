// 1. Remove Duplicate from sorted array

// let removeDuplicateFromSortedArr = (arr) => {
//      let n = arr.length;
//      if(n<2)return arr;
//      let j = 1; // since first elem is already sorted

//      for(let i = 1; i<n-1; i++ ){
//           if(arr[i]!=arr[i+1]){
//                arr[j] = arr[i+1];
//                j++;
//           }
//      }
//      return arr;
// }

// console.log(removeDuplicateFromSortedArr([0,0,1,1,1,2,2,3,4]));

// 2. Merge Two sorted array

// let mergeTwoSortedArr = (arr1, arr2) => {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let mergeArr = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergeArr[k] = arr1[i];
//       i++;
//       k++;
//     } else {
//       mergeArr[k] = arr2[j];
//       j++;
//       k++;
//     }
// //     console.log(i,j,arr1.length,arr2.length)
//   }
//   while (i < arr1.length) {
//     mergeArr[k] = arr1[i];
//     i++;
//     k++;
//   }
//   while (j < arr2.length) {
//     mergeArr[k] = arr2[j];
//     j++;
//     k++;
//   }

//   return mergeArr;
// };

// console.log(mergeTwoSortedArr([1,4,6],[2,3,5,7]));


// 3. Sell and buy stocks

// let sellAndBuyStocks = (arr) => {
//      let n = arr.length;
//      if(n<2)return"No profit";

//      let maxProfit = 0;
//      let minPrice = arr[0];
//      for(let i = 1; i<n; i++){
//           if(arr[i]<minPrice){
//                minPrice = arr[i];
//           }
//           let profit = arr[i] - minPrice;

//           if(profit>maxProfit){
//                maxProfit = profit;
//           }
//      }
//      return maxProfit;
// }

// console.log(sellAndBuyStocks([3, 4, 2, 6, 7, 8]));

// arr = [1,0,1,2,0,0,1,2] , output = [0,0,0,1,1,1,2,2];

// 4. Sort the color
// let sortTheColor = (arr) => {
//      let n = arr.length;

//      if(n<2)return arr;

//      let i = j = 0;
//      let k = arr.length -1;

//      while(j<=k){
//          if(arr[j]==0){
//           let temp = arr[j];
//           arr[j] = arr[i];
//           arr[i] = temp;
//           i++;
//           j++;
//          }else if(arr[j]==1){
//           j++;
//          }else{
//           let temp = arr[k];
//           arr[k] = arr[j];
//           arr[j] = temp;
//           k--;
//          }
//      }
//      return arr;
// }

// console.log(sortTheColor([1,0,1,2,0,0,1,2]))

let majorityElemByMooreVotingAlgo = (arr)  => {
     let n = arr.length;

     if(n<2)return arr;

     let majorElem = arr[0];
     let count = 1;

     // phase 1 . Finding majority elem
     for(let i = 1; i<n; i++){
          if(arr[i]===majorElem){
               count++;
          }else{
               count--;
               // console.log(`Count from else ${count}, majorElem ${majorElem}`)
               if(count===0){
                    majorElem = arr[i];
                    count = 1;
                    // console.log(`Count from if inside else ${count}, majorElem ${majorElem}`)
               }
          }
     }
     // phase 2. verifying if elem is majority or not
     count = 0;
     for(let num of arr){
          if(num===majorElem){
               count++;
          }
     }

     if(count>Math.floor(arr.length/2)){
          return `Majority elem ${majorElem} appear ${count} times`;
     }else{
          return `No majority elem ${majorElem} appears only ${count} times`;
     }
}

console.log(majorityElemByMooreVotingAlgo([2,2,1,1,1,2,2,1,1,5,1]));