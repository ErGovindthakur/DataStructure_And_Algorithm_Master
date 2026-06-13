let bestTimeToBuyAndSellStock = (stock) => {
     let len = stock.length;

     if(len<2) return null;
     let minPrice = stock[0]; // since we know can't sell anything before buying.
     let bstTime = 0;
     let maxProfit = 0;
     for(let i = 1; i<len; i++){
          if(stock[i]<minPrice){
               minPrice = stock[i];
          }
          let profit = stock[i] - minPrice;

          if(profit>maxProfit){
               maxProfit = profit;
               bstTime = i;
          }
     }
     return maxProfit;
}
console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4]));