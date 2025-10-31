let groupAnagrams = (arr) => {
  if (arr.length === 0) return [];

  let map = new Map();

  for (let word of arr) {
    let sorted = word.split("").sort().join("");

    // If key not in map, add it
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }

    // Push the original word into its group
    map.get(sorted).push(word); // let me know how's this working
  }

  // Convert Map values to array
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
