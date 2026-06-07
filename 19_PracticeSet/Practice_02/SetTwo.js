// Set 2 – Intermediate & Problem Solving

// 1. Write a function to flatten a nested array:

let myArr = [1, [2, [3, 4]], 5];  // => [1, 2, 3, 4, 5]
console.log(myArr.flat(Infinity))

// 2. What is closure? Give a real-life analogy.

// Closure => It happens , when inner function use the props of outer function even if the outer function execution is finished,

// It helps to create private counter, Encapsulation, Abstraction

// eg -: Private counter

let PrivateCounter = () => {
     let count = 0;

    return () => {
      count++;
      return count;
     }

     
}
let pc = PrivateCounter();
console.log(pc())
console.log(pc())
// 3. Output and reasoning:

console.log([1, 2, 3] + [4, 5, 6]); // Here both array concat with each other.

// 4. Explain difference between slice and splice with an example where using the wrong one can cause a bug.

let arr = [1,2,3,4,5,6];

// Slice => It doesn't change anything in actual array but return the part of subArray

console.log(arr.slice(2,5)); // last index excluded
console.log("Actual Array after slice -: ",arr);

// Splice => It modifies the actual array but also give me sub array part

console.log(arr.splice(2,3)); // last index excluded
console.log("Actual Array after splice -: ",arr)
// 5. What’s wrong with this code? Fix it.
let num = [10, 1, 5];
num.sort();
// fixed one 

console.log(num.sort((a,b)=>a-b))
