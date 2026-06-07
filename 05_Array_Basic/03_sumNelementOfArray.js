// find the sum of "n" element of an array

let arr = [1,2,3,4,5];

let sum = 0; // it will store the sum

// traversing loop over an array
for(let i = 0; i<arr.length; i++){
     sum += arr[i];
}

console.log(`The sum of an array elements = ${sum}`);

// TMC => O(n) and SPC => O(1)