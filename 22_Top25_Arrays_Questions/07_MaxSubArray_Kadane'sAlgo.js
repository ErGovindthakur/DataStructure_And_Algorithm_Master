let findMaxSubArray = (arr) => {
     // additional check points

     if(!arr || arr.length===0)return 0;

     // let maxSum = -Infinity;
     let maxSum = arr[0]; // starts handling all the negative and positive sum
     let sum = 0;
     let n = arr.length;

     for(let i = 0; i<n; i++){
         sum += arr[i];

         if(sum>maxSum){
          maxSum = sum;
         }

         if(sum<0){
          sum = 0;
         }
     }
     return `The max sum => ${maxSum}`;
}
console.log(findMaxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(findMaxSubArray([5,4,-1,7,8]));
console.log(findMaxSubArray([1]));