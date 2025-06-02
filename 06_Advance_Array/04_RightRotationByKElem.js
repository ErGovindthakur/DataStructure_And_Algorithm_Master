// Rotating elem of array right using k element
// TMC = O(n)
let RightRotationByKElem = (arr, k) => {
  k = Math.floor(k % arr.length);
  for (let i = 1; i <= k; i++) {
    let copy = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = copy;
  }
  return arr;
};

// console.log(RightRotationByKElem([1, 2, 3, 4, 5], 4));

// Right rotation by k element using second method

let k = 2;
let arr = [1,2,3,4,5];
let RightRotationByKElem2 = (i,j) => {
  k = Math.floor(k%arr.length);

  while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

// for left rotation
/*
RightRotationByKElem2(0,k-1);
RightRotationByKElem2(k,arr.length-1);
RightRotationByKElem2(0,arr.length-1); // Analyze pattern here
console.log(arr);
*/


// For right rotation
RightRotationByKElem2(0,arr.length-1); // Analyze pattern here
RightRotationByKElem2(0,k-1);
RightRotationByKElem2(k,arr.length-1);
console.log(arr);

