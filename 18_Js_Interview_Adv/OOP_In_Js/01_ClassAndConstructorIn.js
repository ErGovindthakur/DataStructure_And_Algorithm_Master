// Exploring the class and constructor in js

class Person {
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
  }

  aboutMe() {
    console.log(`Hey, I'm ${this.name} Thakur, a ${this.profession}`);
  }
}

// creating an instance of Person class

let myData = new Person("Govind","Software-Developer");
myData.aboutMe();