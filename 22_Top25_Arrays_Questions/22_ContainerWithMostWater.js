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

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
