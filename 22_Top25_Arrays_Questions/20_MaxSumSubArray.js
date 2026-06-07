let maxSumSubarray = (arr,k) => {
     let maxSum = 0;
     
     for(let i = 0; i<arr.length-2; i++){
          let windowSum  = 0;
          for(let j = i; j<k+i; j++){
               windowSum += arr[j];
          }
          console.log(`Window Sum => ${windowSum}`)
          if(windowSum>maxSum){
               maxSum = windowSum;
          }
     }
     return maxSum;
}

console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3))