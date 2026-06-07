// 🌐 Exploring Execution Context in JavaScript

// 🧠 Execution Context => JavaScript runs inside something called an execution context.
// Think of it like a container (or a box) where the code is evaluated and executed.

// 🔁 It mainly has **three phases**:

// 1. **Creation Phase** => This is where the global context is created.
// JavaScript scans the code for variable and function declarations and sets up memory.

// 2. **Memory Allocation Phase** => Memory is allocated to variables and functions.
// Variables are initialized with `undefined` and functions are hoisted.

// 3. **Execution Phase** => The code is executed line by line.
// When a function is invoked, a new execution context is created for it.
// JavaScript follows the **LIFO (Last In, First Out)** principle for function calls.

// 📌 Lexical Scoping => 
// In simple terms, lexical scoping means that the accessibility of variables 
// is determined by **where functions are defined**, **not where they are called**.
// JavaScript looks at the "physical placement" of variables in the source code.

// 🔥 Note: JavaScript uses **lexical scoping**, not dynamic scoping.
