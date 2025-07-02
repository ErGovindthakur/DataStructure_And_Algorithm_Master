// 1. Find the freq of elem in given array of integers

let arr = [10,7,5,6,10,1,3,5,5,7];
let map = new Map();

for(let i = 0; i<arr.length; i++){
     if(map.has(arr[i])){
          map.set(arr[i],map.get(arr[i])+1)
     }else{
          map.set(arr[i],1)
     }
}

console.log(map)

// 2. Find the freq of char in given string using map

let myName = "GovindThakur";
let nameMap = new Map();

for(let i = 0; i<myName.length; i++){
     if(nameMap.has(myName[i])){
          nameMap.set(myName[i],nameMap.get(myName[i])+1)
     }else{
          nameMap.set(myName[i],1)
     }
}
console.log(nameMap)