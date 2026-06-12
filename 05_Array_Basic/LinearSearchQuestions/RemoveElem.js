let removeElem = (arr,val) => {
     let st = 0;

     for(let i = 0; i<arr.length; i++){
          if(arr[st] !== val){
               st++;
          }else{
               let temp = arr[i];
               arr[i] = arr[st];
               arr[st] = temp;
          }
     }
     return arr;
}
console.log(removeElem([0,1,2,2,3,0,4,2],2))