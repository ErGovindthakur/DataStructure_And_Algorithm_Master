//1.  print namaste dev 5 times using recursion

function sayNamaste(times){
     if(times===0)return;

     console.log("namaste dev");

     times = times-1;
     sayNamaste(times);
}
// sayNamaste(5);

// 2. print 1 to n nums using recursion

let printNums = (n) => {
     if(n===10)return;
     console.log(n);
     n = n+1;
     printNums(n)
}
// printNums(1);

// 3. print n to 1 using recursion

let printNumsInOps = (n) => {
     if(n===0)return;

     console.log(n);
     n = n-1;

     printNumsInOps(n);
}
printNumsInOps(10);