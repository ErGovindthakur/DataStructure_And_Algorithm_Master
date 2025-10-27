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
console.log(findProductOfArrExceptItSelf([1,2,3,4]))