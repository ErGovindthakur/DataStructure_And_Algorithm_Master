// 1. Global Context (Non-strict mode)
console.log("1. Global Context:", this); // window (in browser)

// 2. Global Context (Strict mode)
"use strict";
(function () {
  console.log("2. Global Strict Mode:", this); // undefined
})();

// 3. Inside Object Method
const person = {
  name: "Govind",
  greet() {
    console.log("3. Inside Object Method:", this.name); // Govind
  },
};
person.greet();

// 4. Regular function inside method
const user = {
  name: "Govind",
  greet() {
    function inner() {
      console.log("4. Regular Inner Function:", this.name); // undefined or window.name
    }
    inner();
  },
};
user.greet();

// 5. Arrow function inside method
const user2 = {
  name: "Govind",
  greet() {
    const inner = () => {
      console.log("5. Arrow Inner Function:", this.name); // Govind
    };
    inner();
  },
};
user2.greet();

// 6. Constructor Function
function Car(name) {
  this.name = name;
  console.log("6. Constructor Function:", this.name); // BMW
}
new Car("BMW");

// 7. Class Syntax
class Animal {
  constructor(type) {
    this.type = type;
  }
  showType() {
    console.log("7. Class Method:", this.type); // Dog
  }
}
const a = new Animal("Dog");
a.showType();

// 8. setTimeout with regular function
const obj = {
  name: "Govind",
  say() {
    setTimeout(function () {
      console.log("8. setTimeout (regular):", this.name); // undefined or window.name
    }, 1000);
  },
};
obj.say();

// 9. setTimeout with arrow function
const obj2 = {
  name: "Govind",
  say() {
    setTimeout(() => {
      console.log("9. setTimeout (arrow):", this.name); // Govind
    }, 1200);
  },
};
obj2.say();

// 10. Event Listener (if running in browser)
if (typeof document !== "undefined") {
  const button = document.createElement("button");
  button.textContent = "Click me";
  document.body.appendChild(button);
  button.addEventListener("click", function () {
    console.log("10. Event Listener:", this); // button element
  });
}

// 11. call, apply, bind
function greet() {
  console.log("11. call/apply/bind:", this.name);
}
const context = { name: "Govind" };
greet.call(context); // Govind
greet.apply(context); // Govind
const bound = greet.bind(context);
bound(); // Govind
