let groupAnagrams = (arr) => {
     if(arr.length === 0) return [];

     let map = new Map(); // map creation for getting key and value

     // traverse over whole array
     for(let i = 0; i<arr.length; i++){
          // sorting each array elem to get perfect keys in sorted order
          // let sorted = arr[i].split("");
          // let sorted = arr[i].split("").sort();
          let sorted = arr[i].split("").sort().join();


          // check if map contains particular key or not

          if(!map.has(sorted)){
               map.set(sorted,[]);
          }
          map.get(sorted).push(arr[i]);

     }
     // return map.values();
     return Array.from(map.values())
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));