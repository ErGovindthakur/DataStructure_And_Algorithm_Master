let findProductOfArrExceptItSelf = (arr) => {
     if(arr.length<1)return arr;

     let productArr = [];
     
     for(let i = 0; i<arr.length; i++){
          let product = 1;
          for(let j = 0; j<arr.length; j++){
               if(arr[i] !== arr[j]){
                    product *= arr[j];
                    console.log(`arr[i] -> ${arr[i]} and arr[j]-> ${arr[j]} `);
               }
          }
          console.log(`Pass ${i+1}`)
          productArr.push(product);
     }
     return productArr
}
// console.log(findProductOfArrExceptItSelf([1,2,3,4]));

let productOfArrExceptItSelf = (arr) => {
     let n = arr.length;
     let res = new Array(n).fill(1);

     let prefix = 1;
     
     // for creating a prefix res array
     for(let i = 0; i<n; i++){
          res[i] = prefix;
          prefix *= arr[i];
     }
     console.log(`res array for prefix -> ${res}`);
     
     let suffix = 1;
     // for creating suffix res array
     for(let i = n-1; i>=0; i--){
          res[i] *= suffix;
          suffix *= arr[i];
     }
     return res;
}
console.log(productOfArrExceptItSelf([1,2,3,4]));