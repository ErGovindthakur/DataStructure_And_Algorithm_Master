let findMajorityElem = (arr) => {
     if(arr.length==0)return`No Majority elem found`;
     if(arr.length==1)return`The majority elm => ${arr[0]}`;

     let majorElem = arr[0];
     let count = 1;

     for(let i = 1; i<arr.length; i++){
          if(arr[i]==majorElem){
               majorElem = arr[i];
               count++;
          }else{
               count--;
          }

          if(count==0){
               count=1;
               majorElem=arr[i];
          }

     }

     count = 0;

     for(let elem of arr){
          if(elem==majorElem){
               count++;
          }
     }

     if(count>Math.floor(arr.length/2)){
          return `The majority elem => ${majorElem}`;
     }else{
          return `No majority elem found `;
     }
}
console.log(findMajorityElem([3,2,3]));
console.log(findMajorityElem([2,2,1,1,1,2,2]));