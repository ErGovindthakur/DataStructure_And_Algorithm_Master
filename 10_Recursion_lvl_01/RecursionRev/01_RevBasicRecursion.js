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


let findSum = (n) => {
  if (n === 9) return n;
  return n+findSum(n+1);
};
console.log(findSum(1));
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

// 7. find fibonacci using recursion

let fibonacciRec = (n) => {
  if (n <= 1) return n;

  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
};
/* 
Generally Recursive function follow two steps 

step 1: (Go downward and build stack of function into it's own smaller part)

f(6) => f(5) + f(4)

f(5) => f(4) + f(3)

f(4) => f(3) + f(2)

f(3) => f(2) + f(1)

f(2) => f(1) + f(0)


step 2: (come upward pop the function from stack and return value )

f(2) => 1 + 0 => 1
f(3) => 1 + 1 => 2
f(4) => 2 + 1 => 3
f(5) => 3 + 2 => 5
f(6) => 5 + 3 => 8 (function break call stack becomes empty)
*/
// console.log(fibonacciRec(6));

// 8. find sum of "n" numbers in recursion

let findSumOfNums = (n) => {
  if (n <= 1) return n;

  return n + findSumOfNums(n - 1);
};
/*
Dry Run 
step 1: function building
findSumOfNums(5)
=
5 + findSumOfNums(4)

findSumOfNums(4)
=
4 + findSumOfNums(3)

findSumOfNums(3)
=
3 + findSumOfNums(2)

findSumOfNums(2)
=
2 + findSumOfNums(1)

findSumOfNums(1)
=
1   ← Base Case

step 2: function unwinding (returns value)
findSumOfNums(1) => 1 + findSumOfNums(1-1) => 1 + 1 => 2
findSumOfNums(2) => 2 + findSumOfNums(2-1) => 2 + 1 => 3
findSumOfNums(3) => 3 + findSumOfNums(3-1) => 3 + 3 => 6
findSumOfNums(4) => 4 + findSumOfNums(4-1) => 4 + 6 => 10
findSumOfNums(5) => 5 +  findSumOfNums(5-1) => 5 + 10 => 15
*/

// tmc => O(n) (I have confusion), spc => O(n)
// console.log(findSumOfNums(5));

// 9. find sum of all numbers in an array using recursion

let findArrSum = (arr, n) => {
  if (n <= 0) return arr[n];

  return arr[n] + findArrSum(arr, n - 1);
};
/*
Dry Run 
Step 1: (function building)

1.findArrSum(arr,4) =>  arr[4] + findArrSum(arr,3)

2.findArrSum(arr,3) => arr[3] + findArrSum(arr,2)

3.findArrSum(arr,2) => arr[2] + findArrSum(arr,1)

4.findArrSum(arr,1) => arr[1] + findArrSum(arr,0)

5.findArrSum(arr,0) => arr[0] = 1 (base case reached)

Step 2: (function unwinding)
5.findArrSum(arr,0) => arr[0] = 1

4.findArrSum(arr,1) => arr[1] + findArrSum(arr,0) => 2 + 1 => 3

3.findArrSum(arr,2) => arr[2] + findArrSum(arr,1) => 3 + 3 => 6

2.findArrSum(arr,3) => arr[3] + findArrSum(arr,2) => 4 + 6 => 10

1.findArrSum(arr,4) =>  arr[4] + findArrSum(arr,3) => 5 + 10 => 15

*/

// tmc => O(n), // spc => O(n)
// console.log(findArrSum([1,2,3,4,5],4));

// 10 . find factorial of a number using recursion

let findFactorial = (n) => {
  if (n <= 0) return 1;

  return n * findFactorial(n - 1);
};
console.log(findFactorial(5));

// 11. find if the given is power of two or not

let findPowerOfTwo = (n) => {
  if (n == 1) {
    return true;
  } else if (n <= 0 || n % 2 !== 0) {
    return false;
  }

  n = Math.floor(n / 2);

  return findPowerOfTwo(n);
};
// console.log(findPowerOfTwo(8));
