// 🚀 Exploring the Concept of Closures in JavaScript

// ✅ Closure:
// In JavaScript, a closure is created when an inner function has access to 
// the variables of its outer function even after the outer function has finished executing.
// This is possible due to **Lexical Scoping**.

// 📌 Note:
// Closures are powerful—they help in implementing:
// - Private counters
// - Encapsulation
// - Abstraction

// 🧱 Encapsulation:
// - Hides how data is stored
// - Focuses on data protection
// - Wraps data and methods together, restricting direct access from outside

// 🧩 Abstraction:
// - Hides internal implementation details
// - Focuses on simplifying usage
// - Only exposes necessary parts of the code to the user

// 💡 Achieving Encapsulation using Closure:

let person = () => {
    let secret = "mySecret";  // private variable

    return {
        getPassword: () => secret, // public method to access the secret
    };
};

let p = person();
console.log(p.getPassword());  // ✅ Accesses secret via method
console.log(p.secret);         // ❌ undefined - secret is not directly accessible

// 💡 Achieving Abstraction using Closure:

let startCar = () => {
    console.log("Engine Started");
    console.log("Fuel Injection");
    console.log("Spark Plug Fired");
    console.log("Car is Started");
    console.log("Car is Running");
};

let driveCar = () => {
    startCar();  // Hides complex internal logic
    console.log("Car is Driving"); // Simple interface for users
};

driveCar();
