let search = (arr,target) => {
     let n = arr.length;
     if(n<2 && arr[0]===target)return true;

     for(let i = 0; i<n; i++){
          if(arr[i]===target){
               return true;
          }
      }
      return false;
}
console.log(search([4,1,6,3,2,7],6))
console.log(search([6],6))