let revString = (arr) => {
     let st = 0;
     let end = arr.length-1;

     while(st<end){
          let temp = arr[st];
          arr[st] = arr[end];
          arr[end] = temp;
          st++;
          end--;
          console.log(st,end)
     }
     return arr;
}
console.log(revString(["g","o","v","i","n","d"]));