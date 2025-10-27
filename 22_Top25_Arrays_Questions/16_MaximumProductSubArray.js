let maximumProductSubArray = (arr) => {
     let n = arr.length;
     if(n<1)return arr;

     let product = 1;
     let maxProduct = 1;

     for(let i = 0; i<n; i++){
          product *= arr[i];

          if(product>maxProduct){
               maxProduct = product;
          }

          if(product<0){
               product = 1;
          }
     }
     return maxProduct;
}

console.log(maximumProductSubArray([2,3,-2,4]));