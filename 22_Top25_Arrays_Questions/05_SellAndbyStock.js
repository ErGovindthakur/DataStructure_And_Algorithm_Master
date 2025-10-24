let sellAndBuyStock = (prices) => {
     if(prices.length<=1)return"Take Prices of more than 2 days";

     let minPrice = prices[0];
     let profit = 0;
     let sellingPrice = 0;
     let buyingPrice = 0;

     for(let i = 1; i<prices.length; i++){

          if(prices[i]<minPrice){
               minPrice = prices[i];
               buyingPrice = i;
          }

          let maxProfit = prices[i] - minPrice;

          if(maxProfit>profit){
               profit = maxProfit;
               sellingPrice = i;
          }
     }
     return `Product purchased at day ${buyingPrice} and sold at day ${sellingPrice} and profit ${prices[sellingPrice]- prices[buyingPrice]}`;
}
console.log(sellAndBuyStock([7,1,5,3,6,4]));