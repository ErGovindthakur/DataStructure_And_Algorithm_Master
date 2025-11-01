let firstAndLastIdxOfTarget = (arr,target) => {

     if(arr.length === 0) return [-1,-1];
     let result = new Set();
     for(let i = 0; i<arr.length; i++){
          if(arr[i]===target){
               let lastIdx = i;
               result.add(i,lastIdx);
          }
     }
     if(arr.includes(target)){
          return Array.from(result);
     }
     return [-1,-1];
}
console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],8));
console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],6));
console.log(firstAndLastIdxOfTarget([],0));