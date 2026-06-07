let leftRotationByN = (arr,n) => {
     if(arr.length <= 1) return arr;

     let k = Math.floor(n%arr.length);
     for(let j = 0; j<k; j++){
          let copy = arr[0];

          for(let i = 0; i<arr.length; i++){
               arr[i] = arr[i+1];
          }
          arr[arr.length-1] = copy;
     }
     return arr;
}
// TMC => O(m*n), spc => O(1)
// console.log(leftRotationByN([1,2,3,4,5],2));

// 2. optimizing above code version using reversal technique

let reverse = (arr,st,end) => {
     if(arr.length<=1) return arr;

     while(st<end){
          [arr[st],arr[end]] = [arr[end],arr[st]];
          st++;
          end--;
     }
     return arr;
}

let leftRotationByN2 = (arr,n) => {
     let k = Math.floor(n%arr.length);

     reverse(arr,0,k-1);
     reverse(arr,k,arr.length-1);
     reverse(arr,0,arr.length-1);

     return arr;
}

// TMC => O(n), and SPC => O(1)
console.log(leftRotationByN2([1,2,3,4,5],2));