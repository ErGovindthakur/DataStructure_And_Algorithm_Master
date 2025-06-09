// Solve sort the color problem in place

// arr = [1,0,1,2,0,0,1,2] , output = [0,0,0,1,1,1,2,2];

let sortTheColor = (arr) => {
     let i = j = 0;
     let k = arr.length-1;

     while(i<=k){
          if(arr[i]==0){
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp;
               i++;
               j++;
          }else if(arr[i] == 1){
               i++;
          }
          else{
               let temp = arr[i];
               arr[i] = arr[k];
               arr[k] = temp;
               k--;
          }
     }
     return arr;
}
console.log(sortTheColor([1,0,1,2,0,0,1,2]));