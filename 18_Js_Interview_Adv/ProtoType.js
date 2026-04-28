const animal = {
     eat:true,
     walk(){
          console.log("Animal walk");
     }
}

const rabbit = {
     speak:true,
     __proto__:animal // rabbit inherits from elem
}

console.log(rabbit.eat); // true (found in prototype!)
rabbit.walk();

/*
Note -: 1
prototype → belongs to constructor function  
__proto__ → belongs to object instance
*/

/*
Note -: 2
1. prototype : It's Function Property, is used to share properties and methods across all the objects

eg : 
*/

function person(name){
     this.name = name;
}

person.prototype.sayHello = function(){
     console.log("Hello : ", this.name)
}

/*
2. __proto__ (Object Property), is a reference to the object's parent (prototype) 
*/

// consuming Person 
const p1 = new person("Govind");
p1.sayHello()

/*
“JavaScript uses prototype chaining, where if a property is not found on the object, it looks up through proto until null.”
*/

/*
What is Prototypal Inheritance?
=> “Prototypal inheritance is a mechanism where objects inherit properties and methods from other objects through a prototype chain.”
*/

const parent = {
     sayHi(){
          console.log('Hi from parent ')
     }
}

const child = Object.create(parent);
child.sayHi();

// Class based prototypal inheritance
class Person{
     constructor(name){
          this.name = name
     }

     greet(){
          return `Hello ${this.name}`
     }
};

const p2 = new Person("Govind Thakur");
console.log(p2.greet())