// Set => It's similar to array but stores only unique element

let mySet = new Set();
// Add
mySet.add(1)
mySet.add(2)
mySet.add(3)
// mySet.add(3) Don't store duplicate 

console.log(mySet)

// delete
mySet.delete(2)
console.log(mySet)

// check presence
console.log(mySet.has(3)); // true

// sets are also iterable
mySet.forEach((elem)=>{
     console.log("Data -: ForEach",elem*2) // It creates a new instance doesn't change anything
})
console.log(mySet)

for(let value of mySet){
     console.log(value)
}