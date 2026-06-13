let findMissingNum = (arr) => {
     let n = arr.length;

     let expectedSum = Math.floor((n * (n+1))/2);

     let actualSum = arr.reduce((acc,val)=>acc+val,0);

     return expectedSum - actualSum;
}
console.log(findMissingNum([9,6,4,2,3,5,7,0,1]));