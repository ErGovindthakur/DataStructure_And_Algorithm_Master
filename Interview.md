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


### 🧠 JavaScript Data Types
JavaScript has two main categories of data types:

### 🔹 1. Primitive Types
These are simple, immutable values — stored by value.

| Data Type   | Example            | Description                           |
| ----------- | ------------------ | ------------------------------------- |
| `Number`    | `42`, `3.14`, `-7` | Any kind of number (integer or float) |
| `String`    | `"Hello"`, `'JS'`  | Sequence of characters                |
| `Boolean`   | `true`, `false`    | Logical true/false                    |
| `Undefined` | `let x;`           | Declared but not assigned             |
| `Null`      | `let x = null`     | Represents “no value”                 |
| `BigInt`    | `1234567890n`      | For large integers beyond `Number`    |
| `Symbol`    | `Symbol("id")`     | Unique & immutable identifier         |
✅ Stored in stack (lightweight & copied directly)


### 🔹 2. Reference (Non-Primitive) Types
These are complex types, like objects, and are stored by reference.

| Data Type        | Example                       | Description           |
| ---------------- | ----------------------------- | --------------------- |
| `Object`         | `{ name: "Govind", age: 22 }` | Key-value pairs       |
| `Array`          | `[1, 2, 3]`                   | Indexed list of items |
| `Function`       | `function greet() {}`         | Callable object       |
| `Date`, `RegExp` | `new Date()`, `/abc/`         | Built-in objects      |
✅ Stored in heap (referenced by pointer)

### 🧪 Quick Example to Show the Difference:
```js
// Primitive - copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a is untouched)

// Reference - copied by reference
let obj1 = { name: "Govind" };
let obj2 = obj1;
obj2.name = "Thakur";
console.log(obj1.name); // "Thakur" (both point to the same object)

```

✅ Summary Table
| Feature    | Primitive Types               | Reference Types               |
| ---------- | ----------------------------- | ----------------------------- |
| Stored in  | Stack                         | Heap                          |
| Copied by  | Value                         | Reference                     |
| Mutability | Immutable                     | Mutable                       |
| Examples   | `Number`, `String`, `Boolean` | `Object`, `Array`, `Function` |

### ✅ Dynamic Typing in JavaScript
JavaScript is a dynamically typed language, which means you don’t need to declare the type of a variable — the type is determined at runtime based on the value assigned.

```js
let x = 10;       // x is a Number
x = "Hello";      // now x is a String
x = true;         // now x is a Boolean

```

### 🤔 What is typeof?
typeof is an operator used to check the type of a value in JavaScript.
```js
typeof 42         // "number"
typeof "Govind"   // "string"
typeof true       // "boolean"

```
### ⚠️ Quirks of typeof (Surprising Behaviors)
| Expression             | Output        | Explanation                                                       |
| ---------------------- | ------------- | ----------------------------------------------------------------- |
| `typeof null`          | `"object"`    | ❗ Bug in JS from the beginning. `null` is **not** an object.      |
| `typeof NaN`           | `"number"`    | NaN stands for "Not a Number", **but typeof is still `"number"`** |
| `typeof []`            | `"object"`    | Arrays are objects in JS (use `Array.isArray()` to check arrays)  |
| `typeof function() {}` | `"function"`  | ✅ Special case — functions get their own type                     |
| `typeof undefined`     | `"undefined"` | Normal — `undefined` is a primitive type                          |
| `typeof Symbol("id")`  | `"symbol"`    | ✅ Symbol is a unique primitive type                               |
| `typeof BigInt(123)`   | `"bigint"`    | ✅ BigInt has its own type                                         |
| `typeof new Date()`    | `"object"`    | Date is also an object                                            |

### 🔄 What is Type Coercion?
Type coercion means JavaScript automatically converts one data type to another when comparing or doing operation

### ⚖️ == vs ===
| Operator | Name            | Type Coercion? | Explanation                            |
| -------- | --------------- | -------------- | -------------------------------------- |
| `==`     | Loose Equality  | ✅ Yes          | Converts types **before** comparing    |
| `===`    | Strict Equality | ❌ No           | Compares **both value and type** as-is |


### 🔍 Example Differences
```js
0 == false         // ✅ true    (type coercion: false becomes 0)
0 === false        // ❌ false   (different types: number vs boolean)

"5" == 5           // ✅ true    (string "5" is converted to number 5)
"5" === 5          // ❌ false   (string !== number)

null == undefined  // ✅ true    (both are considered loosely equal)
null === undefined // ❌ false   (different types)

"" == 0            // ✅ true    (empty string becomes 0)
"" === 0           // ❌ false

```

### 🧠 Summary (When to Use What)
✅ Use === (strict equality) almost always — it's safer and more predictable.

⚠️ == can lead to weird bugs due to type coercion, so avoid it unless you know what you're doing

### ✅ 1. Truthy & Falsy Values in JavaScript
JavaScript treats some values as true or false when used in a boolean context (like if, while, etc.).

### 🔴 Falsy Values (Only 6 of them):

| Value       | Description     |
| ----------- | --------------- |
| `false`     | Boolean false   |
| `0`         | Number zero     |
| `-0`        | Negative zero   |
| `""`        | Empty string    |
| `null`      | Null value      |
| `undefined` | Undefined value |
| `NaN`       | Not a Number    |


### ✅ Truthy Values (Examples):
| Value           | Description         |
| --------------- | ------------------- |
| `"hello"`       | Non-empty string    |
| `42`            | Any non-zero number |
| `[]`            | Empty array         |
| `{}`            | Empty object        |
| `function() {}` | Any function        |
### 🔍 Example:
```js
if ("hello") {
  console.log("Truthy"); // ✅ prints this
}

if (0) {
  console.log("Falsy"); // ❌ won't run
}

```

#### 🤯 Why this weird behavior?
JavaScript has only one numeric type: Number.

NaN is a special value in the number system that means “invalid number result”.

It’s used when:

```js
parseInt("abc") // NaN
0 / 0           // NaN
Math.sqrt(-1)   // NaN

```