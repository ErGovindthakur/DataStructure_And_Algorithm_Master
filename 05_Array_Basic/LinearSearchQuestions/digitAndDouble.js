let digitAndDouble = (nums) => {
    let freq = {};
    
    for(let i = 0; i<nums.length; i++){
 
         if(freq[nums[i]*2] || freq[nums[i]/2]){
              return true;
          }
          freq[nums[i]] = true;
          // console.log(freq[i],nums[i]);
          // console.log(freq[i])
    }
    console.log(freq)
    return false;
}

console.log(digitAndDouble([10,2,5,3]))
console.log(digitAndDouble([3,1,7,11]))