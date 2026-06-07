let containerWithMostWater = (height) => {
  let n = height.length;
  if (n < 1) return 0;

  let maxWaterArea = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let width = j - i;

      let hgt = Math.min(height[i], height[j]);

      let waterArea = width * hgt;

      maxWaterArea = Math.max(waterArea, maxWaterArea);
    }
  }
  return maxWaterArea;
};

// console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

let containerWithMostWaterTwoPointer = (height) => {
  if (height.length === 0) return 0;

  let stLine = 0; // starting height
  let endLine = height.length - 1; // ending height

  let maxArea = 0; // stores max water

  while (stLine < endLine) {
    let width = endLine - stLine;
    let hgt = Math.min(height[stLine], height[endLine]);
    let area = width * hgt;

    maxArea = Math.max(area, maxArea);

    // actual task
    if (height[stLine] < height[endLine]) {
      stLine++;
    } else {
      endLine--;
    }
  }
  return maxArea;
};

console.log(containerWithMostWaterTwoPointer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
