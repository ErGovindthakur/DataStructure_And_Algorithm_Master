let selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {

    let min = i; // suppose min elem is 0th index elem

    for (let j = i; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j; // put the jth index into min variable
      }
    }
    // now apply swapping technique
    if(min != i){
         let temp = arr[i];
         arr[i] = arr[min];
         arr[min] = temp;
    }
  }
  return arr;
};
console.log(selectionSort([3, 1, 9, 5, 2, 7]));
