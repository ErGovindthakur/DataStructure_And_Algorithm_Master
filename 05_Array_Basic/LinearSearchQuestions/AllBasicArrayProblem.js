// Practicing all basic array problems


// 1. Remove duplicate elem 

let removeDupElem = (arr) => {
     let j = 0;
     let n = arr.length;
     for(let i = 0; i<n; i++){
          if(arr[i]!==arr[j]){
               j++;
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
          }
     }
     return arr.slice(0,j+1);
}
// console.log(removeDupElem([0,0,1,1,1,2,2,3,3,4,5,5]));

// 2. Remove Elem

let removeElem  = (arr,elem) => {
     let st = 0;
     let end = arr.length-1;

     // method 1

     // while(st<end){
     //      if(arr[st]!==elem){
     //           st++;
     //      }
     //      if(arr[end]===elem){
     //           end--;
     //      }
     //      if(arr[st]===elem && arr[end]!==elem){
     //           arr[st] = arr[end]
     //           st++;
     //           end--;
     //      }
     // }

     // method 2
     for(let i = 0; i<arr.length; i++){
          if(arr[i]!==elem){
               arr[st] = arr[i];
               st++;
          }
     }
     return arr.slice(0,st+1);
}
// console.log(removeElem([0,1,2,2,3,0,4,2],2));
// console.log(removeElem([3,2,2,3],3))

// 3. Best time to buy and sell stock

let bstTimeToBuyAndSellStocks = (arr) => {
     let maxProfit = 0;
     let minPrice = arr[0];

     for(let i = 1; i<arr.length; i++){
          if(arr[i]<minPrice){
               minPrice = arr[i];
          }
          let profit = arr[i] - minPrice;

          if(profit>maxProfit){
               maxProfit = profit;
          }
     }
     return maxProfit;
}
// console.log(bstTimeToBuyAndSellStocks([3,1,5,2,6,4]));
// console.log(bstTimeToBuyAndSellStocks([7,1,5,3,6,9]))

// 4. Merge sorted array inPlace

let mergeSortedArrayInPlace = (arr1,m,arr2,n) => {
     // Note : here m and n are the numbers of non-zero elem

     let i = m-1;
     let j = n-1;
     let k = m+n-1;

     console.log("Initially : i,j,k ",i,j,k)
     while(i>0 && j>0){
          if(arr1[i]>arr2[j]){
               arr1[k--] = arr1[i--];
          }else{
               arr1[k--] = arr2[j--];
          }
          console.log("Inside a 1st while Loop : i,j,k ",i,j,k)
     }

     while(i>0){
          console.log("Inside a 2nd while Loop : i,j,k ",i,j,k)
          arr1[k--] = arr1[i--];
     }

     while(j>0){
          console.log("Inside a 3rd while Loop : i,j,k ",i,j,k)
          arr1[k--] = arr2[j--]
     }
     return arr1;
}
// console.log(mergeSortedArrayInPlace([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(mergeSortedArrayInPlace([1], 1, [0], 0));
// console.log(mergeSortedArrayInPlace([1], 1, [], 0));

// 5. Solving find the single number problem

let findSingleNum = (arr) => {
     let freq = {};

     for(let i = 0; i<arr.length; i++){
          let elem = arr[i];
          if(freq[elem]){
               freq[elem] += 1;
          }else{
               freq[elem] = 1;
          }
     }

     // applying loop over obj
     for(let key in freq){
          if(freq[key]===1){
               return Number(key)
          }
     }
     return -1;
}
console.log(findSingleNum([1,1,4,3,3,5,4]));