// 📘 Exploring the Book Allocation Problem

/*
📝 Problem Statement:
1. You are given an array `Book[]` where each element represents the number of pages in a book.
2. You have to allocate these books to `k` students such that:
   a. Each student gets at least one book.
   b. Books must be allocated in contiguous order.
   c. You minimize the **maximum number of pages assigned to a student**.
*/

// ✅ Helper Function to Check If Current Mid Is a Valid Allocation

let isValid = (Book, mid, student) => {
  let numOfStudents = 1;   // Start with 1 student
  let sumOfPage = 0;       // Track pages assigned to current student

  for (let i = 0; i < Book.length; i++) {
    
    // If a single book has more pages than mid, allocation is not possible
    if (Book[i] > mid) return false;

    // If current book can't be added to current student, assign to next student
    if (sumOfPage + Book[i] > mid) {
      numOfStudents++;         // Allocate to new student
      sumOfPage = Book[i];     // Start new sum from this book
    } else {
      sumOfPage += Book[i];    // Continue assigning books to current student
    }
  }

  // If number of students used is more than allowed, not valid
  return numOfStudents <= student;
};

let allocateBook = (Book, student) => {
  // 🛑 Base Case: Can't assign books if students are more than available books
  if (Book.length < student) return -1;

  // 📍 Define Binary Search Boundaries
  let min = Math.max(...Book);                  // Lower bound: max single book pages
  let max = Book.reduce((a, b) => a + b, 0);     // Upper bound: sum of all pages
  let ans = 0;

  // 🔁 Binary Search to find minimum of the "maximum pages"
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    // If valid allocation with current mid, store answer and try for better
    if (isValid(Book, mid, student)) {
      ans = mid;
      max = mid - 1;
    } else {
      // Try with larger mid (not enough pages allowed per student)
      min = mid + 1;
    }
  }

  // 🎯 Return the minimum possible value of maximum pages
  return ans;
};

// ✅ Driver Code
console.log(allocateBook([2, 3, 1, 5, 4, 8, 9], 2)); // Output: 17
