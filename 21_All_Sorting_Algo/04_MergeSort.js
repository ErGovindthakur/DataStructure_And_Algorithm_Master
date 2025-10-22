
// 1. Writing the merge arr logic and sort array
let mergeArr = (arr1,arr2) => {
     let i = 0;
     let j = 0;
     let mergeArr = [];

     while(i<arr1.length && j<arr2.length){
          if(arr1[i]<arr2[j]){
               mergeArr.push(arr1[i]);
               i++;
          }else{
               mergeArr.push(arr2[j]);
               j++;
          }
     }

     // checking for remaining part
     while(i<arr1.length){
          mergeArr.push(arr1[i]);
          i++;
     }
     while(j<arr2.length){
          mergeArr.push(arr2[j]);
          j++;
     }
     console.log(arr1,arr2)
     // console.log();
     return mergeArr;
}


// 2. writing the divide method

let divide = (arr) => {

     // base case 
     if(arr.length<=1)return arr;

     let mid = Math.floor(arr.length/2);
     let left = arr.slice(0,mid); // mid is excluded
     let right = arr.slice(mid); // mid included

     // actual logic to divide array individually
     let sortedLeft = divide(left);
     let sortedRight = divide(right);

     // console.log("Sorted Left -> ",sortedLeft);
     // console.log("Sorted Right -> ",sortedRight);
     return mergeArr(sortedLeft,sortedRight);
}

console.log(divide([5,7,9,1,4,8]))
