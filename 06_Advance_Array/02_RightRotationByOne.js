// Find right rotation by one element by one element into an array

let findRightRotationByOne = (arr) => {
     // handling edge cases
     if(arr.length < 1) return arr;

     // copying the lost value initially 
     let copy = arr[arr.length - 1];

     for(let i = arr.length - 1; i>=1; i--){
          arr[i] = arr[i-1];
     }
     arr[0] = copy;
     return arr;
}

console.log(findRightRotationByOne([1,2,3,4,5]));