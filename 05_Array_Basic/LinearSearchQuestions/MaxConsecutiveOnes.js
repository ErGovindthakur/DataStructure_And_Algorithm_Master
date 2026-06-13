let maxConsecutiveOnes = (arr) => {
     let n = arr.length;
     if(n<2)return arr;

     let count = 0;
     let maxCount = 0;

     for(let i = 0; i<n; i++){
          if(arr[i]===1){
               count++;
          }else{
               count = 0;
          }

          if(count>maxCount) maxCount = count;

          // console.log("count : ",count);
     }
     return maxCount
}
console.log(maxConsecutiveOnes([1,1,0,1,1,1]))
console.log(maxConsecutiveOnes([1,0,1,1,0,1]))