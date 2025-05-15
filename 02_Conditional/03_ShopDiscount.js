// shop discount problem

/*
Constraints

Amount      |  Discount
0 - 5000    |  0%
5001 - 7000 |  5%
7001 - 9000 |  10%
More than 9000 |  20%

Discount formula

Discounted Price (Payable price) = Actual Price - (ActualPrice * discount)/100
*/

let actualAmount = 7000;
let discountInPercentage ;

if(actualAmount > 0 && actualAmount <= 5000){
     discountInPercentage = 0;
}else if(actualAmount > 5001 && actualAmount <= 7000){
     discountInPercentage = 5;
}else if(actualAmount > 7001 && actualAmount <= 9000){
     discountInPercentage = 10;
}else if(actualAmount > 9001){
     discountInPercentage = 20;
}else{
     console.log("You enter wrong Price value ")
}
let discountedPrice = (actualAmount*discountInPercentage)/100;
console.log(`The discountedPrice = ${discountedPrice}`);

let payableAmount = actualAmount - (actualAmount*discountInPercentage)/100;
console.log(`The payable amount = ${payableAmount}`)

