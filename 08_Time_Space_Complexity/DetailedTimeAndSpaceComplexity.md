# 🚀 Time Complexity & Space Complexity Master Guide (JavaScript)

> Complete roadmap from Basic → Intermediate → Advanced for Coding Interviews, DSA, and Problem Solving.

---

# Table of Contents

## Phase 1: Basic
1. What is Time Complexity?
2. Why Time Complexity Matters?
3. What is Space Complexity?
4. Why Space Complexity Matters?
5. Big-O Notation
6. Common Time Complexities
7. Rules of Calculating Complexity
8. Basic Complexity Examples

## Phase 2: Intermediate
9. Logarithmic Complexity
10. Complexity with Multiple Inputs
11. Array Complexity
12. Object Complexity
13. JavaScript Built-in Methods Complexity
14. Two Pointer Technique
15. Sliding Window Technique
16. Complexity Analysis Practice

## Phase 3: Advanced
17. Recursion Complexity
18. Recursive Tree Analysis
19. Divide and Conquer
20. Sorting Algorithms Complexity
21. HashMap and Set Complexity
22. Amortized Complexity
23. Time vs Space Tradeoff
24. Interview Traps and Edge Cases

---

# PHASE 1: BASIC

---

# 1. What is Time Complexity?

## What?

Time Complexity describes how the execution time of an algorithm grows as input size increases.

### Example

```js
for(let i = 0; i < n; i++) {
    console.log(i);
}
```

Loop runs n times.

```txt
Time Complexity = O(n)
```

---

## Why?

To compare algorithms efficiently.

Example:

```js
// Solution A
for(let i = 0; i < n; i++) {}
```

```js
// Solution B
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {}
}
```

Second solution becomes significantly slower as n increases.

---

## When?

Whenever:

- Solving DSA problems
- Building scalable systems
- Preparing for interviews

---

## Where?

Asked in:

- FAANG Interviews
- Product Companies
- Competitive Programming
- System Design discussions

---

## How?

Count operations based on input growth.

---

# 2. What is Space Complexity?

## What?

Extra memory used by an algorithm.

### Example

```js
let sum = 0;
```

```txt
Space Complexity = O(1)
```

---

### Example

```js
let arr = [];

for(let i = 0; i < n; i++) {
    arr.push(i);
}
```

```txt
Space Complexity = O(n)
```

---

## Why?

Memory is limited.

Efficient programs optimize both:

```txt
Time + Space
```

---

# 3. Big-O Notation

## What?

Represents worst-case growth rate.

---

# Complexity Ranking

```txt
Best
↓
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(n³)
O(2ⁿ)
O(n!)
↑
Worst
```

---

# 4. O(1) Constant Time

```js
function getFirst(arr){
    return arr[0];
}
```

```txt
O(1)
```

---

# 5. O(n) Linear Time

```js
for(let i = 0; i < n; i++) {}
```

```txt
O(n)
```

---

# 6. O(n²) Quadratic Time

```js
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
    }
}
```

```txt
O(n²)
```

---

# 7. Complexity Rules

---

## Rule 1: Drop Constants

```txt
O(2n)
```

becomes

```txt
O(n)
```

---

## Rule 2: Keep Dominant Term

```txt
O(n² + n + 1)
```

becomes

```txt
O(n²)
```

---

## Rule 3: Sequential Loops Add

```js
for(let i=0;i<n;i++){}
for(let j=0;j<n;j++){}
```

```txt
O(n+n)
= O(2n)
= O(n)
```

---

## Rule 4: Nested Loops Multiply

```js
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){}
}
```

```txt
O(n²)
```

---

# PHASE 2: INTERMEDIATE

---

# 8. O(log n)

## What?

Input size keeps shrinking.

---

### Example

```js
while(n > 1){
    n = Math.floor(n/2);
}
```

```txt
16 → 8 → 4 → 2 → 1
```

```txt
O(log n)
```

---

## Binary Search

```js
function binarySearch(arr,target){

    let left = 0;
    let right = arr.length - 1;

    while(left <= right){

        let mid = Math.floor((left+right)/2);

        if(arr[mid] === target){
            return mid;
        }

        if(target > arr[mid]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1;
}
```

```txt
Time = O(log n)
Space = O(1)
```

---

# 9. Multiple Inputs

## Interview Trap

```js
function solve(arr1, arr2){

    for(let x of arr1){}
    for(let y of arr2){}
}
```

Not:

```txt
O(n)
```

Correct:

```txt
O(n + m)
```

---

# 10. Nested Multiple Inputs

```js
for(let x of arr1){
    for(let y of arr2){}
}
```

```txt
O(n * m)
```

---

# 11. Array Complexity

| Operation | Complexity |
|------------|-----------|
| Access | O(1) |
| Update | O(1) |
| Search | O(n) |
| Insert End | O(1) |
| Delete End | O(1) |
| Insert Beginning | O(n) |
| Delete Beginning | O(n) |

---

# 12. Object Complexity

| Operation | Complexity |
|------------|-----------|
| Access | O(1) |
| Insert | O(1) |
| Delete | O(1) |
| Search Key | O(1) |

---

# 13. JavaScript Built-in Methods

---

## Push

```js
arr.push(10);
```

```txt
O(1)
```

---

## Pop

```js
arr.pop();
```

```txt
O(1)
```

---

## Shift

```js
arr.shift();
```

```txt
O(n)
```

---

## Unshift

```js
arr.unshift(5);
```

```txt
O(n)
```

---

## Includes

```js
arr.includes(10);
```

```txt
O(n)
```

---

## IndexOf

```js
arr.indexOf(10);
```

```txt
O(n)
```

---

# 14. Two Pointer Technique

```js
let left = 0;
let right = arr.length - 1;

while(left < right){
    left++;
    right--;
}
```

Many beginners think:

```txt
O(n²)
```

Wrong.

```txt
O(n)
```

---

# 15. Sliding Window

```js
let left = 0;

for(let right = 0; right < n; right++){

    while(condition){
        left++;
    }
}
```

Looks nested.

Actually:

```txt
O(n)
```

because both pointers move at most n times.

---

# PHASE 3: ADVANCED

---

# 16. Recursion Complexity

---

## Linear Recursion

```js
function fun(n){

    if(n === 0) return;

    fun(n-1);
}
```

```txt
Time = O(n)
Space = O(n)
```

---

# 17. Fibonacci Recursion

```js
function fib(n){

    if(n <= 1){
        return n;
    }

    return fib(n-1) + fib(n-2);
}
```

```txt
Time = O(2ⁿ)
Space = O(n)
```

---

# 18. Divide and Conquer

---

## Merge Sort

```txt
Divide = log n
Merge = n
```

```txt
O(n log n)
```

---

## Quick Sort

Average:

```txt
O(n log n)
```

Worst:

```txt
O(n²)
```

---

# 19. Sorting Complexity Table

| Algorithm | Best | Average | Worst |
|------------|---------|----------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) |
| Selection Sort | O(n²) | O(n²) | O(n²) |
| Insertion Sort | O(n) | O(n²) | O(n²) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) |

---

# 20. HashMap Complexity

```js
const map = new Map();
```

---

## Operations

```js
map.set()
map.get()
map.has()
map.delete()
```

Average:

```txt
O(1)
```

---

# 21. Set Complexity

```js
const set = new Set();
```

---

## Operations

```js
set.add()
set.has()
set.delete()
```

Average:

```txt
O(1)
```

---

# 22. Amortized Complexity

---

## Push Operation

```js
arr.push(10);
```

Usually:

```txt
O(1)
```

Sometimes:

```txt
O(n)
```

due to resizing.

Average:

```txt
Amortized O(1)
```

---

# 23. Time vs Space Tradeoff

---

## Brute Force

```js
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){

        if(arr[i]+arr[j] === target){
            return true;
        }
    }
}
```

```txt
Time = O(n²)
Space = O(1)
```

---

## HashMap Approach

```js
let map = new Map();

for(let num of arr){

    let complement = target - num;

    if(map.has(complement)){
        return true;
    }

    map.set(num,true);
}
```

```txt
Time = O(n)
Space = O(n)
```

---

# Most Important Interview Traps

---

## Trap 1

```txt
O(2n)
```

Answer:

```txt
O(n)
```

---

## Trap 2

```txt
O(n² + n)
```

Answer:

```txt
O(n²)
```

---

## Trap 3

Nested Loop ≠ Always O(n²)

```js
while(left < right){
    left++;
    right--;
}
```

```txt
O(n)
```

---

## Trap 4

Recursion Time ≠ Space

```txt
Time = O(n)
Space = O(n)
```

Analyze separately.

---

## Trap 5

Two Arrays

```txt
O(n+m)
```

Not:

```txt
O(n)
```

---

## Trap 6

Quick Sort Worst Case

```txt
O(n²)
```

---

## Trap 7

Binary Search Works Only On

```txt
Sorted Arrays
```

---

## Trap 8

HashMap Complexity

Usually:

```txt
O(1)
```

Worst case:

```txt
O(n)
```

---

# Interview Cheat Sheet

| Complexity | Meaning |
|------------|----------|
| O(1) | Constant |
| O(log n) | Binary Search |
| O(n) | Single Loop |
| O(n log n) | Merge Sort |
| O(n²) | Nested Loop |
| O(2ⁿ) | Recursive Fibonacci |
| O(n!) | Permutations |

---

# Final Goal

After completing this roadmap, you should be able to:

✅ Analyze any JavaScript code complexity

✅ Solve DSA interview questions efficiently

✅ Identify optimization opportunities

✅ Understand tradeoffs between time and space

✅ Explain complexity confidently during interviews

🚀 Next Step:
Start Lesson 1 — "Why do we ignore actual execution time and focus on growth rate?"