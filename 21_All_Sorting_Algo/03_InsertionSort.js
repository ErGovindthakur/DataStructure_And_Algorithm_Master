let insertionSort = (arr) => {
     let n = arr.length; 

     for(let i = 1; i<n; i++){ // starts from 1st index not 0th index
          let key = arr[i]; // elements to be inserted
          let j = i-1; // compare with left elem

          // shifting larger elem to right
          while(j>=0 && arr[j]>key){
               arr[j+1] = arr[j];
               j--;
               console.log(`The value of j -> ${j}`)
          }

          arr[j+1] = key;

     }
     return arr;
}

console.log(insertionSort([5, 2, 4, 6, 1, 3]))