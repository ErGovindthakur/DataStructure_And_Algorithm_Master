let TwoSum2 = (arr,target) => {
     if(!arr || arr.length < 2) return "sum not found";

     let map = new Map();

     for(let i = 0; i<arr.length; i++){
          let diff = target - arr[i];

          if(map.has(diff)){
               return [map.get(diff),i+1];
          }
          map.set(arr[i],i+1);
     }
}
console.log(TwoSum2([2,7,11,15],9));