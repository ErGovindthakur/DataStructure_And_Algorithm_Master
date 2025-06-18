// Count all the prime number available under the range

let countPrime = (n) => {
  let arr = new Array(n + 1).fill(true);
  // applying outer loop to iterate over all the array elem

  // outer loop (1)
  for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) {
    if (arr[i]) {
      // inner loop (2)
      for (let j = i * i; j < n; j += i) {
        // j = 9; j<31; j = i(3)+3 => 9,12,15.. are false
        arr[j] = false;
      }
    }
  }

  // loop for printing prime num (3)
  for (let i = 2; i < arr.length - 1; i++) {
    if (arr[i]) process.stdout.write(i + " ");
  }
};

countPrime(30);
