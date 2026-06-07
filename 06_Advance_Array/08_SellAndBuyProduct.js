let sellAndBuyProduct = (arr) => {
  let minPrice = arr[0];
  let maxProfit = 0;
  let profitPrice = arr[0]; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }

    let profit = arr[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
      profitPrice = arr[i]; 
    }
  }

  return `The Purchasing day price is ${minPrice} Rs and selling day price is ${profitPrice} Rs and profit is ${maxProfit} Rs`;
};

console.log(sellAndBuyProduct([3, 4, 2, 6, 7, 8]));

// // Merge two sorted array using js

let MergeTwoSortedArray = (arr1,arr2) => {

     let i = 0; // index for arr1
     let j = 0; // index for arr2
     let k = 0; // index for mergeArr

     // creating a merge array

     let mergeArr = new Array(arr1.length + arr2.length);
     
     while(i<arr1.length && j<arr2.length){
          if(arr1[i]<arr2[j]){
               mergeArr[k++] = arr1[i++];

          }else{
               mergeArr[k++] = arr2[j++];
          }
     }

     // Writing condition for if arr1's length is greater than arr2's length

     while(i<arr1.length){
          mergeArr[k++] = arr1[i++];
     }
     while(j<arr2.length){
          mergeArr[k++] = arr1[j++]
     }

     return mergeArr;
}
console.log(MergeTwoSortedArray([1,4,7,9,10],[2,5,8]));


// // Remove duplicate from the sorted array 

let RemoveDuplicate = (arr) => {
     let j = 1;
     for(let i = 0; i<arr.length-1; i++){
          if(arr[i]!=arr[i+1]){
               arr[j] = arr[i+1];
               j++;
          }
     }
     return arr.slice(0,j);
}

console.log(RemoveDuplicate([0,0,1,1,1,2,2,3,3,4,5]));

// // TMC => O(n) and SPC => O(n)