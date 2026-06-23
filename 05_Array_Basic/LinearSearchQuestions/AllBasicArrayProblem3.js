// 1. Remove duplicate from sorted array

let removeDuplicate = (arr) => {
    
    let n = arr.length;
    let j = 0;
    for(let i = 0; i<n; i++){
        if(arr[i]!==arr[j]){
            j++;
            arr[j] = arr[i];
        }
    }
    return arr.slice(0,j+1);
}
// console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDuplicate([1,1,2]))


// 2. remove a specific elem from array
let removeElem = (arr,elem) => {
    let n = arr.length;
    
    let j = 0;
    for(let i = 0; i<n; i++){
        if(arr[i]!==elem){
            arr[j] = arr[i];
            j++;
        }
    }
    return arr.slice(0,j);
}
// console.log(removeElem([2,3,2,3],3));
// console.log(removeElem([0,1,2,2,3,0,4,2],2));


// 3. merge sorted array

let mergeSortedArr = (arr1,m,arr2,n) => {
    let i = m-1;
    let j = n-1;
    let k = (m+n)-1;
    
    while(i>=0 && j>=0){
        if(arr1[i]>arr2[j]){
            arr1[k] = arr1[i];
            i--;
            k--;
        }else{
            arr1[k] = arr2[j];
            k--;
            j--;
        }
    }
    
    while(i>=0){
        arr1[k] = arr1[i];
        k--;
        i--;
    }
    while(j>=0){
        arr1[k] = arr2[j];
        k--;
        j--;
    }
    return arr1;
}

// console.log(mergeSortedArr([1,2,3,0,0,0],3,[2,5,6],3))

let moveZeros = (arr) => {
    let n = arr.length;
    
    let j = 0;
    
    for(let i = 0; i<n; i++){
        if(arr[i]!==0){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}
// console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([1,0]))
