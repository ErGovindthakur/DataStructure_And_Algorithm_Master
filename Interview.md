## This Readme.md file contains everything related to javascript which can be asked during js interviews

### keywords
=> Keywords are some words those contain some meaning and they are predefined in language compiler, and they perform some special types of task. 
<br />
eg -> let,var,const =>(used for defining variable and constant), if => (used for apply conditions), for => (used for performing iterative tasks)

### Variables 
=> They something like names of memory location, where our data is stored , they can varies
<br />
eg => name = "Govind";  , name = "Govind Thakur",

### Diff among (let, var, const)
| Feature                      | `var`                              | `let`                             | `const`                                   |
| ---------------------------- | ---------------------------------- | --------------------------------- | ----------------------------------------- |
| **Scope**                    | Function-scoped                    | Block-scoped                      | Block-scoped                              |
| **Hoisting**                 | Yes (initialized with `undefined`) | Yes (but not initialized, in TDZ) | Yes (but not initialized, in TDZ)         |
| **Re-declaration**           | Allowed in the same scope          | Not allowed in the same scope     | Not allowed in the same scope             |
| **Re-assignment**            | Allowed                            | Allowed                           | ❌ Not allowed (must be initialized once)  |
| **Initial Value Required**   | No                                 | No                                | ✅ Yes (must be initialized when declared) |
| **Global Object Property**   | Yes (`window.varName`)             | No                                | No                                        |
| **Best Use Case**            | Legacy code                        | Mutable variables in block scope  | Constants and immutables in block scope   |
| **Temporal Dead Zone (TDZ)** | ❌ No                               | ✅ Yes                             | ✅ Yes                                     |

### ✅ Temporal Dead Zone (TDZ) – Explained Simply
Definition: TDZ is the time between entering the block and the actual declaration of the variable (let or const), where accessing the variable will throw a ReferenceError — even though JavaScript already "knows" about the variable due to hoisting.

### ✅ What is Hoisting?
Hoisting means JavaScript moves declarations to the top of their scope before executing the code.

```js
var x;        // declaration hoisted
console.log(x); // undefined
x = 5;        // initialization stays here
```

### Hoisting Summary Table
| Type                 | Hoisted?      | Accessible Before Declaration?       |
| -------------------- | ------------- | ------------------------------------ |
| `var`                | ✅ Yes         | ✅ Yes (value is `undefined`)         |
| `let` / `const`      | ✅ Yes         | ❌ No (in TDZ, ReferenceError)        |
| Function Declaration | ✅ Yes (fully) | ✅ Yes (entire function is available) |
| Function Expression  | ✅ Partially   | ❌ No (same as `var`, undefined)      |
