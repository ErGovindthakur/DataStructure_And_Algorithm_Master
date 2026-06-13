let moveZero = (arr) => {
     let n = arr.length;
     if(n<2) return arr;

     // let st = 0;
     // let end = n-1;

     // while(st<end){
     //      if(arr[st]===0){
     //           let temp = arr[st];
     //           arr[st] = arr[end];
     //           arr[end] = temp;
     //           st++;
     //           end--;
     //      }else{
     //           st++;
     //      }
     // }

     let j = 0;
     for(let i = 1; i<n; i++){
          if(arr[j]===0){
               let temp = arr[j];
               arr[j] = arr[i];
               arr[i] = temp;
               j++;
               console.log("j before minus: ",j)
               if(arr[j-1]===0){
                    j--; // here is the whole game
               }
               console.log("j after minus: ",j)
          }
     }
     return arr;
}
console.log(moveZero([0,1,0,3,12]))