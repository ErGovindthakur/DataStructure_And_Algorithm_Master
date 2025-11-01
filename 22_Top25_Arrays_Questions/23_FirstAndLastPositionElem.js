let firstAndLastIdxOfTarget = (arr,target) => {

     if(arr.length === 0) return [-1,-1];
     let first = -1;
     let last = -1;

     for(let i = 0; i<arr.length; i++){
          if(arr[i]===target){
               if(first === -1) first = i;
               last = i;
          }
     }
     return [first,last];
}
console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],8));
console.log(firstAndLastIdxOfTarget([5,7,7,8,8,10],6));
console.log(firstAndLastIdxOfTarget([],0));

// let firstAndLastIdxOfTarget2 = (arr,target) => {
//      if(arr.length===0) return [-1,-1];

//      let st = 0;
//      let end = arr.length - 1;

//      while(st<end){
//           let mid = Math.floor((st+end)/2);
//           console.log(arr[mid]);
//           st++;
//           end--;

//      }
// }
// console.log(firstAndLastIdxOfTarget2([5,7,7,8,8,10],8));