// Explore basic of map

// Map => It's similar to objects in js , which stores data in key-value pairs but keys are always unique in Map()

let myMap = new Map();

// some basic methods of map

// adding value
myMap.set("name","Govind"); // here the name will replace by "Govind to Govind Thakur"
myMap.set("name","Govind Thakur");
myMap.set("email","ergovindthakur@gmail.com");
myMap.set("password","123go");

console.log(myMap)

// deleting value
myMap.delete("password")
console.log(myMap)

// checking value

myMap.has("email"); // true => log it to check

// checking size
console.log(myMap.size);