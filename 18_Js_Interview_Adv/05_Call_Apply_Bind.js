// Exploring the call, apply, and bind in JavaScript

// Note:
// The call, apply, and bind methods are used to **manipulate the value of `this` keyword** in JavaScript.

// 1. call() => Invokes the function immediately.
//    It accepts the value of `this` as the first argument,
//    followed by function arguments one by one.

let person = {
    aboutPerson: function (city, country) {
        console.log(`Hey, I'm ${this.name} Thakur, a ${this.profession} from ${city}, ${country}`);
    }
};

const prof = {
    name: "Govind",
    profession: "Software Developer"
};

console.log("Using call:");
person.aboutPerson.call(prof, "Siwan", "India"); // 'this' points to `prof`

// 2. apply() => Also invokes the function immediately.
//    It accepts the value of `this` as the first argument,
//    followed by an array of arguments.

console.log("Using apply:");
person.aboutPerson.apply(prof, ["Siwan", "India"]); // 'this' points to `prof`

// 3. bind() => Does NOT invoke the function immediately.
//    It returns a **new function** with the `this` context and arguments bound.
//    You can call this returned function later.

console.log("Using bind:");
const bindedFunc = person.aboutPerson.bind(prof, "Siwan", "India");
bindedFunc(); // executes later, with 'this' still pointing to `prof`
