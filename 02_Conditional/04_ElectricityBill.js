// Solving problem of electricity bill 

/*
constraints

unit          ->    price
up to 100      |   Rs 4.2/unit
101 to 200     |   Rs 6/unit
201 to 400     |   Rs 8/unit
more than 400  |   Rs 13/unit


1. let suppose we have 700 units 
2. Apply bottom to top approach

Dry run approach

let unit = 700;
let amount = 0;

if => unit > 400 => unit - 400 <=> (700 - 400) = 300
amount += unit * 13 <=> (300 * 13) = 3900;
unit = unit - 300; 
unit = 400;

if unit > 200 and unit <= 400  
=> unit - 200 
=> 400 - 200 = 200
amount += unit * 8 
amount = 200 * 8 => 1600

if unit > 100 and unit <= 200 
unit = unit - 100 => 100
amount += unit * 6
amount = 100 * 6 => 600

if unit > 0 and unit <= 100

amount += unit * 4;


print => amount
*/

let amount = 0;
let unit = 700;
let extra = 0;

if(unit > 400){
     extra = unit - 400;
     amount += extra * 13;
     unit = unit - extra;
}
if(unit > 200){
     extra = unit - 200;
     amount += extra * 8;
     unit = unit - extra;
}
if(unit>100){
     extra = unit - 100;
     amount += unit * 6;
     unit = unit - extra;
}
if(amount>0){
     extra = unit - 100;
     amount += extra * 4.2;
     unit = unit - extra;
}
console.log(`unit = ${unit}, amount = ${amount}, extra = ${extra}`);