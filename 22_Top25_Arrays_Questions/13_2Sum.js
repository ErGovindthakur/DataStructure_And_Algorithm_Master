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
console.log(TwoSum([2,7,11,15]));