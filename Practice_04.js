// Find max consecutive one's (1's)
let findMaxConsecutiveOne = (arr) => {
     if(!arr.includes(1)) return -1;

     let oldCount = 0;
     let newCount = 0;
     for(let i = 0; i<arr.length; i++){
          if(arr[i]===1){
               newCount++;
          }else{
               if(arr[i]!==1){
                    newCount = 0;
               }
          }
          if(oldCount<newCount){
               oldCount = newCount;
          }
     }
     return oldCount;
}
console.log(findMaxConsecutiveOne([0,1,0,1,1,1,0,0,1,1,1,1,1])); // 3
