let findTheArrContainsDupElem = (arr) => {
     if(arr.length<1)return "No Duplicate elem found";

     for(let i = 0; i<arr.length; i++){
          for(let j = 0; j<arr.length; j++){
               if(arr[i]===arr[j] && i !== j){
                    return true;
               }
          }
     }
     return false;
}
// console.log(findTheArrContainsDupElem([0,2,3,1,2]));

let findTheArrContainsDupElemByMap = (arr) => {
     if(arr.length<1)return "No Dup elem is available";

     let map = new Map();

     for(let i = 0; i<arr.length; i++){
          if(map.has(arr[i])){
               return true;
          }
          map.set(arr[i],i);
     }
     return false;
}

// console.log(findTheArrContainsDupElemByMap([1,2,3,1]));

let findTheArrContainsDupElemBySet = (arr) => {
     if(arr.length<1)return "No Dup elem is available";

     let seen = new Set();

     for(let i = 0; i<arr.length; i++){
          if(seen.has(arr[i])){
               return true;
          }
          seen.add(arr[i]);
     }
     return false;
}

console.log(findTheArrContainsDupElemBySet([1,2,3,1]));