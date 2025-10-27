let findTheArrContainsDupElem = (arr) => {
     if(arr.length<1)return "No Duplicate elem found";

     for(let i = 0; i<arr.length; i++){
          for(let j = 0; j<arr.length; j++){
               if(arr[i]===arr[j] && i !== j){
                    return true;
               }
          }
     }
     return false;
}
console.log(findTheArrContainsDupElem([0,2,3,1,2]));