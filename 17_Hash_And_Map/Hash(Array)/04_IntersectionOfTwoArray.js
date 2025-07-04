// Solving find the intersection of two array problem
let findIntersection = (arr1, arr2) => {
  let outputArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr1.length; k++) {
      if (arr1[i] == arr2[k] && !outputArr.includes(arr1[i] || arr2[k])) {
        outputArr.push(arr2[k]);
        arr2[k] = null;
        break;
      }
    }
  }
  return outputArr;
};

// console.log(findIntersection([1,2,2,1,3],[1,3,2,1]));

// Time complexity => O(n^2)

// Optimized solution using map

let findIntersection2 = (arr1,arr2) => {
     let ans = [];
     // put the arr1 value into the map
     let dupCheckMap = new Set(arr1);

     // iterate over 2nd arr
     for(let i = 0; i<arr2.length; i++){
          if(dupCheckMap.has(arr2[i]) && !ans.includes(arr2[i])){
               ans.push(arr2[i]);
          }
     }
return ans
}
console.log(findIntersection2([1,2,2,3],[1,2,4,3,1]))

//O(n + m * k)
