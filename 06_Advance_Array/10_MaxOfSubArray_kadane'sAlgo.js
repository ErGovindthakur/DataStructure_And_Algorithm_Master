// Find maximum of subarray(using kadane's algo)

// eg -:arr = [-2,1,-3,4,-1,2,1,-5,4], output = 6

let findMaxSubArray = (arr) => {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
   sum += arr[i];

   if(sum > max){
    max = sum;
   }

   if(sum<0){
    sum = 0
   }
  }
  return max;
};

console.log(findMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// TMC => O(n) and SPC => O(1)