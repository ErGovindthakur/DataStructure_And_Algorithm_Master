// ==========================================================
// 1. Search an element in an array and return its index
// ==========================================================

function searchElem(arr, elem) {

    // Handle empty array
    if (arr.length === 0) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i;
        }
    }

    return -1;
}

console.log(searchElem([4, 2, 0, 10, 8, 30], 8));


// Feedback Question 1:
// ❌ Bug:
// if(n < 2) return arr;
// Returning array is wrong.
// Should return index or -1.


// ==========================================================
// 2. Find all negative numbers in an array
// ==========================================================

function findNegNum(arr) {

    let negArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negArr.push(arr[i]);
        }
    }

    return negArr;
}

console.log(findNegNum([1, 8, -2, 3, -4]));


// Feedback Question 2:
// ✅ Logic is correct
// ❌ Returning count only loses actual negative numbers
// Better return array and use .length if count is needed


// ==========================================================
// 3. Find largest number in array
// ==========================================================

function largestNumFunc(arr) {

    if (arr.length === 0) return null;

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(largestNumFunc([5, 0, 7, 10, 8, 17, 100]));


// Feedback Question 3:
// ✅ Good solution
// ❌ Returning string isn't ideal
// Return actual value instead


// ==========================================================
// One-liner Largest
// ==========================================================

const globArr = [5, 0, 7, 10, 8, 17, 100];

const largestNum2 = Math.max(...globArr);

console.log(largestNum2);


// Feedback:
// ❌ sort() changes original array
// ❌ O(n log n)
// ✅ Math.max() is cleaner


// ==========================================================
// 4. Find smallest number in array
// ==========================================================

function findSmallestNum(arr) {

    if (arr.length === 0) return null;

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(findSmallestNum([5, 0, 7, 10, 8, 17, 100]));


// Feedback Question 4:
// ✅ Good solution
// ❌ Return actual number instead of string


// ==========================================================
// 5. Find Second Largest or Second Smallest
// ==========================================================

function findSecond(arr, type) {

    if (arr.length < 2) return null;

    if (type === "secondLargest") {

        let max = -Infinity;
        let secondMax = -Infinity;

        for (let num of arr) {

            if (num > max) {
                secondMax = max;
                max = num;
            }
            else if (num > secondMax && num !== max) {
                secondMax = num;
            }
        }

        return secondMax === -Infinity
            ? null
            : secondMax;
    }

    if (type === "secondSmallest") {

        let min = Infinity;
        let secondMin = Infinity;

        for (let num of arr) {

            if (num < min) {
                secondMin = min;
                min = num;
            }
            else if (num < secondMin && num !== min) {
                secondMin = num;
            }
        }

        return secondMin === Infinity
            ? null
            : secondMin;
    }

    return "Invalid Type";
}

console.log(
    findSecond([5, 0, 7, 10, 8, 18, 100], "secondLargest")
);

console.log(
    findSecond([5, 0, 7, 10, 8, 18, 100], "secondSmallest")
);


// Feedback Question 5:
// ✅ O(n) solution
// ❌ Your original second smallest condition:
//
// else if(arr[i] > min && arr[i] <= sMin)
//
// Can behave unexpectedly with duplicates.
//
// Better:
//
// else if(num < secondMin && num !== min)