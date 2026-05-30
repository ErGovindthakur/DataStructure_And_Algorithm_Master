// 1. Generic helper for swapping elements
let reverse = (arr,st,end) => {
     while(st<end){
          [arr[st],arr[end]] = [arr[end],arr[st]];
          st++;
          end--;
     }
}

let leftAndRightRotByKElem = (arr,k,direction="left") => {
     let n = arr.length;
     if(n<2)return arr;
     k = k%n;
     if(k===0)return arr;

     if(direction==="left"){
          reverse(arr,0,k-1);
          reverse(arr,k,n-1);
          reverse(arr,0,n-1);
     }else{
          reverse(arr,0,n-1);
          reverse(arr,0,k-1);
          reverse(arr,k,n-1);
     }
     return arr;
}

console.log(leftAndRightRotByKElem([1,2,3,4,5],2));
console.log(leftAndRightRotByKElem([1,2,3,4,5],2,"right"));