let intersectionOfArray = (arr1,arr2) => {
     arr1 = arr1.sort((a,b)=>a-b);
     arr2 = arr2.sort((a,b)=>a-b);
     let i = 0;
     let j = 0;
     let insertSectArr = [];

     while(i<arr1.length && j<arr2.length){
          if(arr1[i]===arr2[j]){
               if(insertSectArr.length===0 || insertSectArr[insertSectArr.length-1]!==arr1[i]){
                    insertSectArr.push(arr1[i]);
               }
               i++;
               j++;
          }else if(arr1[i]<arr2[j]){
               i++;
          }else{
               j++;
          }
     }
     return insertSectArr;
}
console.log(intersectionOfArray([3,2,4,1], [1,2,1,5]))