// Solving some problem using set or HashSet

// 1. Find only unique element in array using set

let elem = [2,3,5,7,5,3,2,1,1,9];

// simple way to find all the unique elem by removing duplicates

let mySet1 = new Set();

for(let i = 0; i<elem.length; i++){
     if(mySet1.has(elem[i])){
          continue;
     }else{
          mySet1.add(elem[i])
     }
}
console.log(mySet1);


// 2. Find only the value which appears only one
let mySet2 = new Set();

for(let i = 0; i<elem.length; i++){
     if(mySet2.has(elem[i])){
          mySet2.delete(elem[i])
     }else{
          mySet2.add(elem[i])
     }
}
console.log(mySet2)