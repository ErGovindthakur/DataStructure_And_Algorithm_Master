// Exploring merge sort using js inbuilt method and diff approach with Time complexity and space complexity


// Method to divide the array into left and right part
let divide = (arr) => {

     // base case
     if(arr.length <= 1) return arr;


     // dividing array once
     let mid = Math.floor(arr.length/2); // mid part
     let left = arr.slice(0,mid); // left arr
     let right = arr.slice(mid); // right arr


     // recursive logic to divide array
     let sortLeft = divide(left);
     let sortRight = divide(right);


     // main method which merge and sort the array
     return merge(sortLeft,sortRight);
};


// method to sort and merge elem

let merge = (leftArr,rightArr) => {

     // Initializing pointers and empty array
     let i = 0;
     let j = 0;
     let mergedArr = [];

     // applying merge and sort technique

     while(i<leftArr.length && j<rightArr.length){

          if(leftArr[i]<rightArr[j]){
               mergedArr.push(leftArr[i++])
          }else{
               mergedArr.push(rightArr[j++])
          }
     }

     // merging the remaining elem

     while(i<leftArr.length){
           mergedArr.push(leftArr[i++])
     }
     while(j<rightArr.length){
           mergedArr.push(rightArr[j++])
     }

     return mergedArr;
}

console.log(divide([2,6,3,5,4,9,7,1]));

// TMC => O(nLogN) ans SPC => O(n)