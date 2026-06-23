//1.  print namaste dev 5 times using recursion

function sayNamaste(times) {
  if (times === 0) return;

  console.log("namaste dev");

  times = times - 1;
  sayNamaste(times);
}
// sayNamaste(5);

// 2. print 1 to n nums using recursion

let printNums = (n) => {
  if (n === 10) return;
  console.log(n);
  n = n + 1;
  printNums(n);
};
// printNums(1);

// 3. print n to 1 using recursion

let printNumsInOps = (n) => {
  if (n === 0) return;

  console.log(n);
  n = n - 1;

  printNumsInOps(n);
};
// printNumsInOps(10);

// 4. print n to 1 using increasing order via a trick and understanding of internal working mechanism of recursion

let printNumViaTrick = (n) => {
  if (n === 10) return;
  n = n + 1;
  printNumViaTrick(n);
  console.log(n);
};
// printNumViaTrick(0);

// 5. find the sum of n numbers using recursion

let sum = 0;
let findSum = (n) => {
  if (n > 9) return;
  sum += n;
  findSum(++n);
};
// findSum(1);
// console.log(sum);

// 6. find fibonacci number using simple loop

let findFibonacciNum = (n) => {
  let prev1 = 0;
  let prev2 = 1;
  if (n <= 1) return n;

  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;

    prev1 = prev2;
    prev2 = current;

    // console.log(prev2,prev1,current);
  }
  return prev2;
};
// console.log(findFibonacciNum(6));

// find fibonacci using recursion

let fibonacciRec = (n) => {
     if (n<=1) return n;

     return fibonacciRec(n-1) + fibonacciRec(n-2);
}
console.log(fibonacciRec(6));