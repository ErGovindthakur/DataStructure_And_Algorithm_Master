
let removeDuplicateFromSortedArr = (arr) => {
    if(arr.length < 2) return arr;
    
    let i = 0;
    let j = 0;
    
    while(j<arr.length){
        if(arr[i]==arr[j]){
            j++;
        }else{
           i++;
           let temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
           j++;
        }
    }
    return arr.slice(0,i+1);
}
// console.log(removeDuplicateFromSortedArr([1,1,2,2,3,3,4,4,5,5,6,6,7,8,8,9,9,9]));

let mergeSortedArr = (arr1,arr2) => {

     let i = 0;
     let j = 0;
     let k = 0;
     let res = new Array(arr1.length + arr2.length);


     while(i<arr1.length && j<arr2.length){
          if(arr1[i]<arr2[j]){
               res[k++] = arr1[i++];
          }else{
               res[k++] = arr2[j++];
          }
     }

     // reaming part
     while(i<arr1.length){
          res[k++] = arr1[i++];
     }
     while(j<arr2.length){
          res[k++] = arr2[j++];
     }

     return res;
}
// console.log(mergeSortedArr([4,8,9],[1,2,3,6]));

let sellAndByStock = (arr) => {
     if(arr.length<2)return arr;

     let min = arr[0];
     let max = 0;
     let maxPrice = 0;
     let buyPrice = 0;
     for(let i = 1; i<arr.length; i++){

          let profit = arr[i] - min;

          if(profit>max){
               max = profit;
               maxPrice = arr[i];
               buyPrice = min;

          }

          if(arr[i]<min){
               min = arr[i];
          }
          
     }
     return `Min Price -: ${buyPrice} and Max Price -: ${maxPrice} then max profit => ${max}`;
}

// console.log(sellAndByStock([2,5,9,3,1,11]));


let sortZeroOneTwo = (arr) => {
     if(arr.length<2) return arr;

     let st = 0;
     let end = arr.length - 1;
     let i = 0;
     while(i<end){
          if(arr[i]==0){
               let temp = arr[i];
               arr[i] = arr[st];
               arr[st] = temp;
               st++;
               i++;
          }else if(arr[i]==1){
               i++;
          }
          else{
               let temp = arr[i];
               arr[i] = arr[end];
               arr[end] = temp;
               end--;
          }
     }
     return arr;
}
// console.log(sortZeroOneTwo([2,0,2,1,1,0,2,2,1,1,0,0,1,2]));

let findMaxSubArr = (arr) => {
     if(arr.length<2)return arr;

     let sum = 0;
     let max = -Infinity;

     for(let i = 0; i<arr.length; i++){
          sum += arr[i];

          if(sum<0){
               sum = 0;
          }
          if(sum > max){
               max = sum;
               console.log("Max value -> ",max);
          }
     }
     return max;
}

// console.log(findMaxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

let findMajorityElem = (arr) => {
     let count = 0;
     let ans = 0;

     for(let i = 0; i<arr.length; i++){
          if(arr[i]===arr[i+1]){
               ans = arr[i];
               count++;
          }else{
               count--;
          }

          if(count === 0){
               ans = arr[i];
               count = 1;
          }
     }

     // verify if the elem is majority or not

     count = 0;

     for(let i = 0; i<arr.length; i++){
          if(ans === arr[i]){
               count++;
          }
     }

     if(count > Math.floor(arr.length/2)){
          return `Majority elem -> ${ans} and occurrence time -> ${count}`;
     }else{
          return "No majority elem found ";
     }
};
console.log(findMajorityElem([1,3,1,2,2,3,3,3,3]));