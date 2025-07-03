// Solve two sum problem using brute force approach tmc O(n^2)

let twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return -1;
};
console.log(twoSum([3, 4, 5, 2, 1], 6));

// Optimize way to find two sum problem

let twoSum2 = (arr, target) => {
  let tgMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (tgMap.has(target - arr[i])) {
      return [i, tgMap.get(target - arr[i])];
    } else {
      tgMap.set(arr[i], i);
    }
  }
  return [-1, -1];
};
