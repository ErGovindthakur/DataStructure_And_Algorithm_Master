# 📘 Map vs Plain Object in JavaScript

In JavaScript, both **Map** and plain objects (`{}`) are used to store key-value pairs — but they have some important differences in behavior, performance, and usage.

---

## ✅ Plain Object (`{}`)

### ✔️ Description:

* Built-in data structure for representing structured data.
* Typically used for storing data with **string** or **symbol** keys.

### 📌 Key Features:

| Feature       | Behavior                                                                   |
| ------------- | -------------------------------------------------------------------------- |
| Key types     | Only `string` or `symbol` (other types are converted to string)            |
| Order         | No guaranteed key order (strings preserve order since ES2015)              |
| Inheritance   | Inherits from `Object.prototype` unless created with `Object.create(null)` |
| Performance   | Slower for frequent additions/removals                                     |
| Serialization | Easily serializable via `JSON.stringify()`                                 |

### 💡 Example:

```js
const obj = {
  name: "Govind",
  age: 24,
};

console.log(obj["name"]); // Govind
```

---

## ✅ Map

### ✔️ Description:

* Introduced in ES6 for better handling of dynamic key-value pairs.
* Allows any **type of key**, including objects, functions, etc.

### 📌 Key Features:

| Feature     | Behavior                                     |
| ----------- | -------------------------------------------- |
| Key types   | Any type (string, object, function, etc.)    |
| Order       | Guaranteed **insertion order**               |
| Inheritance | Does **not** inherit from `Object.prototype` |
| Performance | Optimized for frequent additions/deletions   |
| Size        | Easily accessible using `.size` property     |

### 💡 Example:

```js
const map = new Map();
map.set("name", "Govind");
map.set({ id: 1 }, "Developer");

console.log(map.get("name"));  // Govind
console.log(map.size);          // 2
```

---

## 🔍 Side-by-Side Comparison

| Feature       | Object                                | Map                                     |
| ------------- | ------------------------------------- | --------------------------------------- |
| Key types     | Only strings/symbols                  | Any value (objects, functions, etc.)    |
| Key order     | Mostly insertion order (strings only) | Insertion order guaranteed              |
| Performance   | Slower for dynamic operations         | Faster for frequent additions/deletions |
| Iteration     | `for...in`, `Object.keys()`           | `map.forEach()`, `for...of`, spread     |
| Size          | `Object.keys(obj).length`             | `.size` property                        |
| Serialization | Via `JSON.stringify()`                | Not directly serializable               |

---

## ✅ When to Use What?

### Use **Map**:

* When you need **non-string keys**
* When **key insertion order** matters
* When you're doing **many additions/removals**

### Use **Object**:

* When working with **fixed sets of string-based keys**
* When needing **JSON serialization**
* When using as a **simple data record**
