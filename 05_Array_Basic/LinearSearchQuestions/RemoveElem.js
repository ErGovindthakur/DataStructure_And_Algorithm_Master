let removeElem = (arr,val) => {
     let st = 0;

     for(let i = 0; i<arr.length; i++){
          if(arr[i] !== val){
               arr[st] = arr[i];
               st++;
          }
     }
     return arr;
}
console.log(removeElem([0,1,2,2,3,0,4,2],2));
console.log(removeElem([3,2,2,3],3))