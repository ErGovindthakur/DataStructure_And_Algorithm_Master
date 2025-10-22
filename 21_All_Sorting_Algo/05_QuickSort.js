let quickSort = (arr) => {
     // base case
     if(arr.length<=1)return arr;

     let left = [];
     let right = [];
     let pivot = arr[arr.length-1];

     for(let i = 0; i<arr.length-1; i++){
          if(pivot<arr[i]){
               right.push(arr[i]);
          }else{
               left.push(arr[i]);
          }
     }
     return [...quickSort(left),pivot,...quickSort(right)];
}

console.log(quickSort([5,7,9,1,4,8]));