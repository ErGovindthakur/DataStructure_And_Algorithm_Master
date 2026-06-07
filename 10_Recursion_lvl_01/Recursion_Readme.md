### ✅ 1. Stack (Call Stack) Memory

Used for: Storing primitive data types and function execution contexts.

> Also called: Execution stack or call stack.

1. What goes here:

2. Primitive values: number, string, boolean, undefined, null, symbol, bigint

3. Function calls

4. Local variables with primitive values

> Key behavior:

1. Operates in LIFO (Last In, First Out) manner.

2. When a function is called, its execution context is pushed onto the stack.

3.When the function returns, it is popped off the stack.

* 🧠 Think of it as:

"Where your actual function calls and lightweight primitive data are tracked during execution."

### ✅ 2. Heap Memory
Used for: Storing reference types (objects, arrays, functions).

What goes here:

Objects: { name: "Govind" }

Arrays: [1, 2, 3]

Functions (since they’re also objects in JS)

Why: These structures are dynamic in size and too complex to store directly in the stack.

Access: Variables in the stack hold references (addresses) pointing to the objects stored in the heap.

🧠 Think of it as:

"The big storage area for data that needs more space or flexibility."