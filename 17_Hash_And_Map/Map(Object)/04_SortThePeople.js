// solving a leetCode problem => Sort the people using map and according to their height

let names = ["Marry", "Emma", "John"];
let height = [180, 160, 170];
let namesAndHeightMap = new Map();

// mapping names nad height array in map

for (let i = 0; i < names.length; i++) {
  namesAndHeightMap.set(height[i],names[i]);
}
console.log(namesAndHeightMap);

height.sort((a, b) => b - a);
console.log(height);

let sortedNames = [];
// sorting the name according to height
for (let i = 0; i < height.length; i++) {
  sortedNames.push(namesAndHeightMap.get(height[i]));
}
console.log(sortedNames);

