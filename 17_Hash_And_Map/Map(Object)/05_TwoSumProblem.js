// Solve two sum problem using brute force approach tmc O(n^2)

let twoSum = (arr,target) => {
     for(let i = 0; i<arr.length; i++){
          for(let j = i+1; j<arr.length; j++){
               if(arr[i]+arr[j]===target){
                    return [i,j]
               }
          }
     }
     return -1;
}
console.log(twoSum([3,4,5,2,1],6))