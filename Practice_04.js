// Find max consecutive one's (1's)
let findMaxConsecutiveOne = (arr) => {
     if(!arr.includes(1)) return -1;

     let currentCount = 0;
     let maxCount = 0;
     for(let i = 0; i<arr.length; i++){
          if(arr[i]===1){
               currentCount++;
               maxCount = Math.max(currentCount,maxCount);
          }else{
               if(arr[i]!==1){
                    currentCount = 0;
               }
          }
     }
     return maxCount === 0 ? -1 : maxCount;
}
console.log(findMaxConsecutiveOne([0,1,0,1,1,1,0,0,1,1,1,1,1])); // 3
