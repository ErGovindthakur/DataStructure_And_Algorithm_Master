// Exploring the concept inheritance in js

class Person {
     constructor(name,profession){
          this.name = name;
          this.profession = profession;
     }

     aboutMe(){
          console.log(`Hey, I'm ${this.name} Thakur a ${this.profession}`);
     }
}

// creating instance of Person class

const person = new Person("Govind","Software-Developer");
person.aboutMe();

// Now extending the class Person in Developer class

class Developer extends Person {
     constructor(name,profession,language){
          super(name,profession);
          this.language = language;
     };

     aboutDev(){
          console.log(`${this.name} is using ${this.language}`)
     }
}

// creating the instance of Developer class

const dev = new Developer("Govind","Software-Dev","JavaScript");
console.log("From Parent class -: ")
dev.aboutMe();
console.log("From Child class -: ");
dev.aboutDev();