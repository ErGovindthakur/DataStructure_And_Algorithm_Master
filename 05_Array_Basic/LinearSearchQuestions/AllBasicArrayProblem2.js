// 1. Write a function to remove all duplicate elem from a sorted arr

let arr = [0,0,1,1,1,2,2,3,3,4,4,5,5,6];

let removeDupElem = (arr) => {
     let n = arr.length;

     let j = 0;
     for(let i = 0; i<n; i++){
          if(arr[i]!==arr[j]){
               j++;
               arr[j] = arr[i];
          }
     }
     return arr.slice(0,j+1);
}
console.log(removeDupElem(arr))