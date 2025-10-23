let leftRotationByN = (arr,n) => {
     if(arr.length <= 1) return arr;

     let k = Math.floor(n%arr.length);
     for(let j = 0; j<k; j++){
          let copy = arr[0];

          for(let i = 0; i<arr.length; i++){
               arr[i] = arr[i+1];
          }
          arr[arr.length-1] = copy;
     }
     return arr;
}
console.log(leftRotationByN([1,2,3,4,5],2));