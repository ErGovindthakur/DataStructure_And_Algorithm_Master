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
