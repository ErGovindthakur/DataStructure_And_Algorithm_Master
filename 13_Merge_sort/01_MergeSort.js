// Exploring merge sort very first time 
// Most powerful and one of the efficient sorting algo

// It's generally divide and conquer based algorithm

// Eqn to find length of any array from any part
// Eqn => j - i + 1 (j is lastIndex, i is first index, 1)


let conquer = (arr, first, mid, last) => {

     let temp = new Array(last-first+1);

     let i = first;
     let j = mid + 1;
     let k = 0;

     while(i<=mid && j<=last){ // first condition to fill temp arr , when i and j both are same
          if(arr[i] < arr[j]){
               temp[k++] = arr[i++];
          }else{
               temp[k++] = arr[j++];
          }
     }

     while(i<=mid){
          temp[k++] = arr[i++];
     }
     while(j<=last){
          temp[k++] = arr[j++];
     }

     // Again store temp array value into the actual array

     let p = 0; 
     let t = first;

     while(p<temp.length){;
          arr[t++] = temp[p++]
     }

}

let divide = (arr, first, last) => {
     // console.log(first,last)
     if(first>=last) return;

     let mid = Math.floor((first+last)/2);
     console.log("Mid -: ",mid)

     divide(arr,first, mid);
     divide(arr,mid+1, last);

     conquer(arr,first,mid,last);
}

let arr = [8,2,1,9,5,12,4,20];
divide(arr,0,arr.length-1);
console.log(arr);