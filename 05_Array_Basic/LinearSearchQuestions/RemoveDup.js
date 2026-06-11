var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 0;

    while(fast < nums.length){
        if(nums[slow] !== nums[fast]){
            // console.log(slow,fast)
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return nums.slice(0,slow+1);
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))