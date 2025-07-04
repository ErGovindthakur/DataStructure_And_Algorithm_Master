let subArraySumEqualToK = (arr, k) => {
  let sum = 0;
  let count = 0;
  let sumMap = new Map();

  sumMap.set(0, 1); // important: prefix sum 0 exists once

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k);
      console.log(count)
    }

    sumMap.set(sum, (sumMap.get(sum) || 0) + 1); // ✅ fixed
  }

  return count;
};

console.log(subArraySumEqualToK([10, 2, -2, 20, 10], -10)); // ✅ Output: 1
