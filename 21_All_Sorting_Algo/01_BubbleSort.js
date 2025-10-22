let bubbleSort = (arr) => {
     let n = arr.length;

     for(let i = 0; i<n; i++){ // it conducts passes
          for(let j = 0; j<=n-i-1; j++){ // It does swap until the max elem is reach to last index
               if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
               }
               // console.log(`The value of ${j}`);
          }
          // console.log(`${i} pass`);
          // console.log(arr);
          
     }
     return arr;
}
// tmc => O(n^2), spc => O(1)
console.log(bubbleSort([8,1,4,5,9,2]));