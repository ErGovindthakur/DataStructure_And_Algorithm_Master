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
console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4]));