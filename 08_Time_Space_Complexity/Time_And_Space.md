### Exploring time and space complexity in js

####  ✅ Time Complexity (⏱️)
1. "How long your code takes to run as the input gets bigger."

2. It shows how many steps your program performs.

3. Written in Big O notation like O(1), O(n), O(n²), etc.

> 🧠 Think of it like:

* "If I double the input, does my code take double the time, or more?"


#### ✅ Space Complexity (💾)
1. "How much extra memory your code uses as the input grows."

2. It tells you how many variables, arrays, objects, etc. are created.

3. Also written in Big O notation like O(1), O(n), etc.

> 🧠 Think of it like:

* "Does my code need more space as the input gets larger?"

```js 
function printNames(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// here we are looping at an array till the actual size of array might be (n)

// so Time Complexity = O(n)
// Space Complexity = O(1)
// bcz no extra space being created here

// Note => Time and space complexity may varies according to codes
```

### Time complexity Representation

1. Big O -> upper bound / worst case (It always tells the max time complete a task)

2. Theta -> average case (It always tells the avg time complete a task)

3. Omega -> Lower bound / Best case
(It always tells the min time complete a task)

### Type of time complexity

1. constant time complexity -> O(1)

Note -> if the value of steps is given exactly either 1,2...200 it can also be counted in constant time complexity

2.Big O(n) -> Linear time complexity

Note -> When the value of n is not exactly known.

3. Quadratic Time complexity O(n^2...n) -> In this type of tmc , we generally deals with nested looped code.

4. O(logN) -> it can also be called optimize time complexity 


Note -> it comes in seen where the value of n is being reduce drastically that can be counted as O(logN) tmc.


5. Exponential time complexity (constant^n)
eg -: 5^3 ->

6. Factorial time complexity


##### Time complexity Graph
O(1) < log(n) < O(n) < O(n^2) < O(2^n) < O(n!)j

#### Generating complexity Equation

### 1. ✅ Code 1: sumAll(n)

``` js
function sumAll(n) {
  let sum = 0;              // Constant: 1
  for (let i = 1; i <= n; i++) {
    sum += i;               // n times
  }
  return sum;               // Constant: 1
}

```
✔️ Equation: n + constant <br />
✔️ TMC: O(n) ✅

### 2. ✅ Code 2: printPairs(n)

``` js
function printPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);    // Runs n * n = n² times
    }
  }
}

```
✔️ Equation: n² + constants <br />
✔️ TMC: O(n²) ✅

### 3. ✅ Code 3: binarySearch()

``` js
// writing binary search code

let binarySearch = (arr,target) => {
     let st = 0;
     let end = arr.length - 1;

     let mid ;

     while(st<end){
         mid = Math.floor((st+end)/2);

         if(arr[mid] === target){
          return mid;
         };
         if(arr[mid]< target){
          st = mid + 1;
         }else{
          end = mid - 1;
         }
     }
     return -1;
}

binarySearch([1,5,2,3,6],5);
```
✔️ Equation: logN + constants <br />
✔️ TMC: O(logN) ✅

### Finding TMC from given eqn

1. Eqn -: n^2 + nlog(n) + 1
tmc => O(n^2)


### TLE -: (Time Limit Exceeded)


### ✅ What Is Space Complexity?
* Space Complexity tells you how much extra memory (RAM) your algorithm uses based on the input size.
This includes:

Variables

Data structures (arrays, objects)

Recursive calls

Note -> If in your code there is no extra space creation like an array or object so space complexity will always be O(1)
