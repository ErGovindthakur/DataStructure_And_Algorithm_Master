// Rotate the array element into left by 1

const leftRotationByOne = (arr) => {
     let copy = arr[0];
     for(let i = 0; i<=arr.length-2; i++){
          arr[i]=arr[i+1];
     }
     arr[arr.length - 1] = copy;
     return arr;
}


console.log(leftRotationByOne([1,2,3,4,5]));

// TMC => O(n) and SPC => O(1)