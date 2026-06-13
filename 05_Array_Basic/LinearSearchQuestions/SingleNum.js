let findSingleNum = (arr) => {
     let n = arr.length;

     let freq = {};
     let count = 0;
     for(let i = 0; i<n; i++){
          if(!freq[arr[i]]){
               freq[arr[i]] = 1
          }else{
               freq[arr[i]] += 1;
          }
     }
     
     // applying loop over obj
     for(let key in freq){
          if(freq[key]===1){
               return Number(key);
          }
     }
}
console.log(findSingleNum([4,1,2,1,2]))