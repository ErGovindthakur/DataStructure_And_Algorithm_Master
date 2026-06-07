// Exploring string problems in js

// 1. print each character in new line forward and reverse order

let myName = "Govind";

console.log("Forward order");
// forward order
for(let i = 0; i<myName.length; i++){
     // console.log(myName[i]);
     console.log(String.fromCharCode(myName.charCodeAt(i)));
}

// reverse order
console.log("Reverse Order")
for(let i=myName.length-1; i>=0; i--){
     // console.log(myName[i]);
     console.log(String.fromCharCode(myName.charCodeAt(i)));
}