// Solving the problem of INR Denomination problem using greedy approach

let amountInIndianRupee = 48735;

if(amountInIndianRupee >= 500){
     console.log(`500 Rupee Notes -: ${Math.floor(amountInIndianRupee / 500)}`);
     amountInIndianRupee %= 500;
}
if(amountInIndianRupee >= 200){
     console.log(`200 Rupee Notes -: ${Math.floor(amountInIndianRupee / 200)}`);
     amountInIndianRupee %= 200;
}
if(amountInIndianRupee >= 100){
     console.log(`100 Rupee Notes -: ${Math.floor(amountInIndianRupee / 100)}`);
     amountInIndianRupee %= 100;
}
if(amountInIndianRupee >= 50){
     console.log(`50 Rupee Notes -: ${Math.floor(amountInIndianRupee / 50)}`);
     amountInIndianRupee %= 50;
}
if(amountInIndianRupee >= 20){
     console.log(`20 Rupee Notes -: ${Math.floor(amountInIndianRupee / 20)}`);
     amountInIndianRupee %= 20;
}
if(amountInIndianRupee >= 10){
     console.log(`10 Rupee Notes -: ${Math.floor(amountInIndianRupee / 10)}`);
     amountInIndianRupee %= 10;
}
if(amountInIndianRupee >= 5){
     console.log(`5 Rupee Notes -: ${Math.floor(amountInIndianRupee / 5)}`);
     amountInIndianRupee %= 5;
}
if(amountInIndianRupee >= 2){
     console.log(`2 Rupee Notes -: ${Math.floor(amountInIndianRupee / 2)}`);
     amountInIndianRupee %= 2;
}
if(amountInIndianRupee >= 1){
     console.log(`1 Rupee Notes -: ${Math.floor(amountInIndianRupee / 1)}`);
     amountInIndianRupee %= 1;
}
