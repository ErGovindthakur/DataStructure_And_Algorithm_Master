let findMissingNum = (arr) => {
     let n = arr.length;

     let maxNum = -Infinity;

     for(let i = 0; i<n; i++){
          if(maxNum<arr[i]){
               maxNum = arr[i]; // found max num
          }
     }

     let expectedSum = Math.floor((maxNum * (maxNum+1))/2);

     let actualSum = arr.reduce((acc,val)=>acc+val,0);

     return expectedSum - actualSum;
}
console.log(findMissingNum([9,6,4,2,3,5,7,0,1]));