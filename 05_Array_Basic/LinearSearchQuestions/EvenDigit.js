// time Complexity

// => It is used to measure the efficiency of algorithm in terms of speed, as the input size grows.

// Note => time Complexity != Time Taken

let nums = [12,345,2,6,7896];

let countEvenDigit = (nums) => {
    let maxCount = 0;
    for(let num of nums){
        let count = 0;
        let temp = num;
     //    console.log("Outer Loop runs : ",i)
        while(temp!==0){
          //    console.log("nums[i] : ",nums[i]);
            temp = Math.floor(temp/10);
            count++;
        }
     //    console.log("Inner Loop break and new elem Taken and count : ",count)
        if(count%2 === 0){
            maxCount = maxCount+1;
        }
    }
    return maxCount;
};
// console.log(countEvenDigit(nums));

let countEvenDigit2 = (nums) => {
     let evenDigit = 0;
     for(let num of nums){
          if(num.toString().length %2 === 0){
               evenDigit++;
          }
     }
     return evenDigit;
}
console.log(countEvenDigit2(nums));