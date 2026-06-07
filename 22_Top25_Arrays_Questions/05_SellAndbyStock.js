let sellAndBuyStock = (prices) => {
  if (prices.length <= 1) return "Take Prices of more than 2 days";

  let minPrice = prices[0];
  let profit = 0;
  let sellingDay = 0;
  let buyingDay = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
      buyingDay = i;
    }

    let maxProfit = prices[i] - minPrice;

    if (maxProfit > profit) {
       profit = maxProfit;
      sellingDay = i;
     //  if (sellingDay < buyingDay) {
     //    profit = 0;
     //  }else{
     //      profit = maxProfit;
     //  }
    }
    console.log(`Profit -> ${profit}`)
  }
  if(profit == 0) return "Not profit is possible";

  return `Product purchased at day ${buyingDay} and sold at day ${sellingDay} and profit ${profit}`;
};
console.log(sellAndBuyStock([7, 6, 4, 3, 1]));
console.log(sellAndBuyStock([7, 6, 4, 3, 9]));
