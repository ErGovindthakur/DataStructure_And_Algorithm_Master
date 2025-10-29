let TwoSum = (arr) => {
     if(arr.length<2)return arr;
     let target = 9;
     let n = arr.length;


     for(let i = 0; i<n; i++){
          for(let j = 0; j<n; j++){
               if((arr[i]+arr[j]===target) && (i!==j)){
                    return [i,j];
               }
          }
     }
     return [-1,-1];
}
// TMC => O(n^2), SPC => O(n)
// console.log(TwoSum([2,7,11,15]));

// let mp = new Map();
// mp.set(1,3);
// mp.set(2,5);

// console.log(mp.has(2));

let TwoSum2 = (arr) => {
     if(arr.length<2)return arr;
     let map = new Map();
     let target = 9;
     for(let i = 0; i<arr.length; i++){
          let diff = target - arr[i];
          if(map.has(diff)){
               return [map.get(diff),i];
          }
          map.set(arr[i],i);
     }
     return [-1,-1];
}
// TMC => O(n), SPC => O(n);
console.log(TwoSum2([2,7,11,15]));