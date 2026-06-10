// time Complexity

// => It is used to measure the efficiency of algorithm in terms of speed, as the input size grows.

// Note => time Complexity != Time Taken

let nums = [12,345,2,6,7896];

let countEvenDigit = (nums) => {
    let maxCount = 0;
    for(let i = 0; i<nums.length; i++){
        let count = 0;
     //    console.log("Outer Loop runs : ",i)
        while(nums[i]!==0){
          //    console.log("nums[i] : ",nums[i]);
            nums[i] = Math.floor(nums[i]/10);
            count++;
        }
     //    console.log("Inner Loop break and new elem Taken and count : ",count)
        if(count%2 === 0){
            maxCount = maxCount+1;
        }
    }
    return maxCount;
};
console.log(countEvenDigit(nums));