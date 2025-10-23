let rightRotationByK = (arr, n) => {
  if (arr.length <= 1) return arr;
  let k = Math.floor(n % arr.length);
  for (let j = 0; j < k; j++) {
    let copy = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
      arr[arr.length - i - 1] = arr[arr.length - i - 2];
    }
    arr[0] = copy;
  }

//   return arr;
};
// TMC => O(n^2), SPC => O(1)
// console.log(rightRotationByK([1, 2, 3, 4, 5], 2));

let reverse = (arr,st,end) => {
     if(arr.length<=1) return arr;

     while(st<end){
          let temp = arr[st];
          arr[st] = arr[end];
          arr[end] = temp;
          st++;
          end--;
     }
     // return arr;
}

let rightRotationByK2 = (arr,n) => {
     let k = Math.floor(n%arr.length);

     reverse(arr,k,arr.length-1);
     reverse(arr,0,k-1);
     reverse(arr,0,arr.length-1);

     return arr;
}

console.log(rightRotationByK2([1,2,3,4,5],2));