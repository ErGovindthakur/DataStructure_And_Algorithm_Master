// 1. Exploring the nested loop

let findTripLet = (arr) => {
     let n = arr.length;
     // edge cases
     if(n<3) return [];
     let wholeArr = [];

     for(let i = 0; i<n; i++){
          for(let j = i+1;j<n; j++){
               for(let k = j+1; k<n; k++){
                    if(arr[i]+arr[j]+arr[k]===0){
                         wholeArr.push([arr[i],arr[j],arr[k]]);
                    }
               }
          }
     }
     return wholeArr
}
// TMC = O(n^3), SPC = O(n^3) "I am bit confused here";
// Note : writing these code was easy for me
// console.log(findTripLet([-1, 0, 1, 2, -1, -4]));


// 2. Find the pair of elem sum = 6

let findSum = (arr,tgSum) => {
     let n = arr.length;
     if(n<2)return []; // since we need to elem
     let rs = [];
     for(let i = 0; i<n; i++){
          for(let j = i+1; j<n; j++){
               if(arr[i]+arr[j]===tgSum){
                    rs.push([arr[i],arr[j]])
               }
          }
     }
     return rs;
}
// Here TMC and SPC = O(n^2)
console.log(findSum([1, 2, 3, 4, 5],6));