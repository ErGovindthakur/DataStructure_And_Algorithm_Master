// Reverse a string with and without extra variable

let myName = "Govind";
let revName = ""; // extra variable using
for(let i = myName.length - 1 ;i>=0; i-- ){
     revName+=myName[i];
}
// console.log(revName);


let myRevName = (myName) => {
let nameArr = myName.split("");
let st = 0;
let end = myName.length - 1;

while(st<end){
     let temp = nameArr[st];
     nameArr[st] = nameArr[end];
     nameArr[end] = temp;
     st++;
     end--;
}
return nameArr.join("");
}

console.log(myRevName("Govind"))