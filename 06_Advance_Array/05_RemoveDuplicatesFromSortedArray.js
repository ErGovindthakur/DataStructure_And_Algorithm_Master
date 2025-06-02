// Remove duplicate from the sorted array 

let RemoveDuplicate = (arr) => {
     let j = 1;
     for(let i = 0; i<arr.length-1; i++){
          if(arr[i]!=arr[i+1]){
               arr[j] = arr[i+1];
               j++;
          }
     }
     return arr.slice(0,j);
}

console.log(RemoveDuplicate([0,0,1,1,1,2,2,3,3,4,5]));