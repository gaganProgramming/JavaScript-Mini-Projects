# Understand data types (primitive & reference)

## **1️⃣ Primitive Data Types (Stored in Stack Memory)**

📌 **Immutable (Cannot be changed)**  
📌 **Stored directly in memory**  
📌 **Compared by value**

| Data Type         | Example                            | Description                                        |
| ----------------- | ---------------------------------- | -------------------------------------------------- |
| **Number**        | `let x = 10;`                      | Any numeric value (integers & decimals)            |
| **String**        | `let name = "Gagan";`              | Sequence of characters                             |
| **Boolean**       | `let isReady = true;`              | `true` or `false`                                  |
| **Null**          | `let x = null;`                    | Intentional absence of value                       |
| **Undefined**     | `let y;`                           | A variable that is declared but not assigned       |
| **Symbol (ES6)**  | `let sym = Symbol('id');`          | Unique and immutable identifier                    |
| **BigInt (ES11)** | `let big = 12345678901234567890n;` | For large numbers beyond `Number.MAX_SAFE_INTEGER` |

✅ **Example:**

```js
let a = 10;
let b = a; // Copy by value
b = 20;
console.log(a); // 10 (remains unchanged)
console.log(b); // 20
```

➡️ Here, `a` and `b` hold **separate copies** of the value.

---

## **2️⃣ Reference Data Types (Stored in Heap Memory)**

📌 **Mutable (Can be changed)**  
📌 **Stored as a reference (memory address) in the stack**  
📌 **Compared by reference, not value**

| Data Type    | Example                        | Description                         |
| ------------ | ------------------------------ | ----------------------------------- |
| **Object**   | `let obj = { name: "Gagan" };` | Key-value pairs                     |
| **Array**    | `let arr = [1, 2, 3];`         | List of values                      |
| **Function** | `function greet() {}`          | Functions are objects in JavaScript |
| **Date**     | `let today = new Date();`      | Used to work with dates             |

✅ **Example:**

```js
let obj1 = { name: "Gagan" };
let obj2 = obj1; // Copy by reference

obj2.name = "Suresh"; // Modifies original object

console.log(obj1.name); // "Suresh"
console.log(obj2.name); // "Suresh"
```

➡️ Both `obj1` and `obj2` **point to the same memory location**, so modifying one affects the other.

---

## **3️⃣ Differences: Primitive vs Reference Types**

| Feature        | Primitive         | Reference             |
| -------------- | ----------------- | --------------------- |
| **Stored in**  | Stack Memory      | Heap Memory           |
| **Mutability** | Immutable         | Mutable               |
| **Comparison** | Compared by value | Compared by reference |
| **Assignment** | Copies the value  | Copies the reference  |

✅ **Example:**

```js
// Primitive (Different memory locations)
let x = 10;
let y = x;
y = 20;
console.log(x, y); // 10, 20 (Separate values)

// Reference (Same memory location)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2); // [1, 2, 3, 4], [1, 2, 3, 4]
```

---

## **4️⃣ Checking Data Types: typeof vs instanceof**

🔹 **`typeof`** → Used for primitive types  
🔹 **`instanceof`** → Used for reference types

✅ **Example:**

```js
console.log(typeof 10); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (Array is an object)
console.log(typeof null); // "object" (JavaScript bug!)
console.log(typeof function () {}); // "function"

console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(function () {} instanceof Function); // true
```

---

## **5️⃣ Avoiding Reference Issues (Deep vs Shallow Copy)**

### **Shallow Copy (Copies Reference)**

```js
let obj1 = { a: 1, b: 2 };
let obj2 = obj1; // Reference copy
obj2.a = 10;
console.log(obj1.a); // 10 (Both changed!)
```

### **Deep Copy (Creates a New Object)**

```js
let obj1 = { a: 1, b: 2 };
let obj2 = JSON.parse(JSON.stringify(obj1)); // Deep copy
obj2.a = 10;
console.log(obj1.a); // 1 (Original remains unchanged)
```

---

## **🚀 Active Learning Tasks**

✅ **Predict output before running code**  
✅ **Write examples for each data type**  
✅ **Try making a deep copy using spread operator**  
✅ **Solve this challenge:**

```js
let a = { value: 10 };
let b = a;
b.value = 20;
console.log(a.value); // ??? (Predict!)
```

---

Want more coding challenges? 🔥 Let me know! 🚀

# <br/> <br/>

# Learn type coercion and == vs ===

**JavaScript Type Coercion & `==` vs `===`**
Type coercion is JavaScript’s way of automatically converting values from one data type to another. This can happen **implicitly (automatic)** or **explicitly (manual)**.

---

## **1️⃣ Type Coercion in JavaScript**

📌 **Implicit Coercion** → JavaScript automatically converts data types.  
📌 **Explicit Coercion** → The developer manually converts data types.

✅ **Example (Implicit Coercion):**

```js
console.log("5" - 2); // 3  (String "5" converted to Number)
console.log("5" + 2); // "52"  (Number 2 converted to String)
console.log(5 * "2"); // 10  (String "2" converted to Number)
console.log(10 / "5"); // 2  (String "5" converted to Number)
console.log(true + 1); // 2  (true → 1, so 1 + 1 = 2)
console.log(false + 1); // 1  (false → 0, so 0 + 1 = 1)
```

---

## **2️⃣ Truthy & Falsy Values**

Some values are **implicitly converted** to `true` or `false` in boolean contexts.

### **Falsy Values (Convert to `false`)**

```
0, "", null, undefined, NaN, false
```

✅ **Example:**

```js
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
```

### **Truthy Values (Convert to `true`)**

Everything **except falsy values** is truthy.

✅ **Example:**

```js
console.log(Boolean("hello")); // true
console.log(Boolean(123)); // true
console.log(Boolean([])); // true (Empty array is truthy)
console.log(Boolean({})); // true (Empty object is truthy)
console.log(Boolean("0")); // true ("0" is a non-empty string)
```

---

## **3️⃣ `==` vs `===` (Equality Comparison)**

| Operator | Description     | Type Conversion?                           |
| -------- | --------------- | ------------------------------------------ |
| `==`     | Loose Equality  | ✅ Yes (performs type coercion)            |
| `===`    | Strict Equality | ❌ No (compares both **value** & **type**) |

✅ **Example:**

```js
console.log(5 == "5"); // true  (String "5" converted to Number)
console.log(5 === "5"); // false (Different types: number vs string)

console.log(0 == false); // true  (false → 0)
console.log(0 === false); // false (Different types: number vs boolean)

console.log(null == undefined); // true  (Both treated as absence of value)
console.log(null === undefined); // false (Different types)
```

---

## **4️⃣ Special Cases in Type Coercion**

✅ **Case 1: `null` vs `undefined`**

```js
console.log(null == undefined); // true  (Both are loosely equal)
console.log(null === undefined); // false (Different types)
```

✅ **Case 2: Comparing `NaN`**

```js
console.log(NaN == NaN); // false (NaN is never equal to anything, even itself!)
console.log(isNaN(NaN)); // true (Use isNaN to check for NaN)
```

✅ **Case 3: Object to Primitive Conversion**

```js
console.log([1, 2] + [3, 4]); // "1,23,4" (Arrays converted to strings)
console.log({} + []); // "[object Object]" (Object converted to string)
```

---

## **5️⃣ Avoiding Type Coercion Issues**

✅ **Always use `===` instead of `==`** to prevent unexpected type conversions.  
✅ **Convert types explicitly** using:

```js
// String to Number
console.log(Number("123")); // 123

// Number to String
console.log(String(123)); // "123"

// Boolean Conversion
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
```

---

## **🚀 Active Learning Tasks**

✅ **Predict the output of these:**

```js
console.log([] == false); //true
console.log("0" == false); //true
console.log(null == 0); //false
console.log([] + []); // Blank
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
```

# <br/> <br/>

# Master hoisting (var, let, const, functions)

## **🔥 JavaScript Hoisting (var, let, const, functions) 🔥**

Hoisting is **JavaScript's default behavior** of moving declarations to the **top of their scope** before execution.  
🚀 **Understanding hoisting helps prevent unexpected bugs!**

---

## **1️⃣ What is Hoisting?**

✅ **JavaScript moves function and variable declarations to the top of their scope** during the compile phase.  
✅ **Only declarations are hoisted, not initializations.**

### **Example:**

```js
console.log(x); // ❓ What happens?
var x = 10;
console.log(x); // ✅ 10
```

🔹 **Output:**

```
undefined
10
```

**Why?**  
🔹 JavaScript **hoists** `var x;` to the top, but the assignment `x = 10;` stays in place.

**Behind the Scenes:**

```js
var x; // Hoisted declaration
console.log(x); // undefined (x exists but is not assigned yet)
x = 10;
console.log(x); // 10
```

---

## **2️⃣ Hoisting with `var`, `let`, and `const`**

| Keyword | Hoisted? | Initialized with?  | Scope          |
| ------- | -------- | ------------------ | -------------- |
| `var`   | ✅ Yes   | `undefined`        | Function Scope |
| `let`   | ✅ Yes   | ❌ Not initialized | Block Scope    |
| `const` | ✅ Yes   | ❌ Not initialized | Block Scope    |

✅ **Example with `let` and `const`:**

```js
console.log(y); // ❌ ReferenceError!
let y = 5;
console.log(y);
```

🔹 **Why?**  
`let` and `const` **are hoisted**, but they are **not initialized**.  
This means **you cannot access them before declaration** → **Temporal Dead Zone (TDZ)**.

---

## **3️⃣ Hoisting with Functions**

✅ **Function Declarations are fully hoisted.**  
✅ **Function Expressions & Arrow Functions are NOT hoisted.**

### **Function Declaration (Hoisted ✅)**

```js
hello(); // ✅ Works!

function hello() {
  console.log("Hello, world!");
}
```

🔹 **JavaScript moves the entire function to the top.**

---

### **Function Expression (Not Hoisted ❌)**

```js
greet(); // ❌ TypeError: greet is not a function

var greet = function () {
  console.log("Hi there!");
};
```

🔹 **Why?**  
🔹 `var greet` is **hoisted** as `undefined`, but the function assignment happens later.

---

### **Arrow Functions (Not Hoisted ❌)**

```js
sayHi(); // ❌ ReferenceError: Cannot access 'sayHi' before initialization

let sayHi = () => console.log("Hi!");
```

🔹 Arrow functions behave like `let/const` and **cannot be used before declaration**.

---

## **4️⃣ Temporal Dead Zone (TDZ)**

✅ **The period between hoisting and initialization is called the Temporal Dead Zone.**

### **Example:**

```js
console.log(a); // ❌ ReferenceError
let a = 10;
```

🔹 **Why?**  
`let a;` is hoisted but **not initialized**, so accessing it before declaration **causes an error**.

---

## **5️⃣ Summary of Hoisting**

| Feature          | `var`          | `let`  | `const` | Function Declaration     | Function Expression / Arrow |
| ---------------- | -------------- | ------ | ------- | ------------------------ | --------------------------- |
| **Hoisted?**     | ✅ Yes         | ✅ Yes | ✅ Yes  | ✅ Yes (Fully Hoisted)   | ❌ No                       |
| **Initialized?** | ✅ `undefined` | ❌ No  | ❌ No   | ✅ Yes (Function exists) | ❌ No                       |
| **Scope?**       | Function       | Block  | Block   | Function                 | Function / Block            |

---

## **🚀 Active Learning Tasks**

✅ **Predict the output before running these:**

```js
console.log(num); // undefined
var num = 20;

console.log(test); // reference error: not initialized
let test = "Hello";

foo(); // Foo is called
function foo() {
  console.log("Foo is called!");
}

bar(); // Ref error: bar is not initialized
const bar = () => console.log("Arrow function!");
```

🔹 Try debugging the errors and understand **why they happen!** 🚀

# Learn scope (global, function, block)

**🔥 JavaScript Scope (Global, Function, Block) 🔥**  
Scope **determines where variables and functions are accessible** in your code.

✅ JavaScript has **three types of scope:**  
1️⃣ **Global Scope**  
2️⃣ **Function Scope**  
3️⃣ **Block Scope**

---

## **1️⃣ Global Scope 🌍**

🔹 **Variables declared outside functions** are in the **global scope**.  
🔹 **Accessible anywhere** in the script.  
🔹 Can be modified from anywhere (**can cause bugs**).

✅ **Example:**

```js
var globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // ✅ Accessible
}

showGlobal();
console.log(globalVar); // ✅ Accessible
```

✅ **Output:**

```
I am global
I am global
```

💡 **Caution:** Global variables **pollute the global namespace** and can be **overwritten easily**.

---

## **2️⃣ Function Scope 🏠**

🔹 **Variables declared inside a function** are only accessible **inside that function**.  
🔹 **`var` is function-scoped** (not block-scoped).  
🔹 Cannot be accessed **outside** the function.

✅ **Example:**

```js
function testScope() {
  var localVar = "I am inside a function";
  console.log(localVar); // ✅ Accessible
}

testScope();
console.log(localVar); // ❌ ReferenceError (Not accessible outside)
```

✅ **Output:**

```
I am inside a function
ReferenceError: localVar is not defined
```

---

## **3️⃣ Block Scope 🔲 (`let` & `const`)**

🔹 **A block `{}` defines a scope for `let` & `const`.**  
🔹 Variables inside `{}` cannot be accessed **outside the block**.  
🔹 `var` **is NOT block-scoped**, only `let` and `const` are.

✅ **Example (Block Scope with `let` & `const`):**

```js
{
  let blockVar = "I exist only inside this block";
  console.log(blockVar); // ✅ Accessible inside block
}

console.log(blockVar); // ❌ ReferenceError (Not accessible outside)
```

✅ **Example (`var` is NOT block-scoped):**

```js
if (true) {
  var x = 100;
}

console.log(x); // ✅ 100 (var is function-scoped, NOT block-scoped)
```

✅ **Output:**

```
100
```

💡 **Use `let` & `const` to prevent unintended access outside the block.**

---

## **4️⃣ Nested Scope (Lexical Scope) 🏡**

🔹 **Inner functions have access to outer functions’ variables.**  
🔹 **Outer functions do NOT have access to inner function variables.**

✅ **Example:**

```js
function outer() {
  let outerVar = "Outer";

  function inner() {
    let innerVar = "Inner";
    console.log(outerVar); // ✅ Accessible
    console.log(innerVar); // ✅ Accessible
  }

  inner();
  console.log(innerVar); // ❌ ReferenceError (Not accessible outside inner)
}

outer();
```

✅ **Output:**

```
Outer
Inner
ReferenceError: innerVar is not defined
```

---

## **5️⃣ Function Scope vs Block Scope**

| Feature              | `var`  | `let`  | `const` |
| -------------------- | ------ | ------ | ------- |
| **Function Scoped?** | ✅ Yes | ❌ No  | ❌ No   |
| **Block Scoped?**    | ❌ No  | ✅ Yes | ✅ Yes  |
| **Reassignable?**    | ✅ Yes | ✅ Yes | ❌ No   |

---

## **🚀 Active Learning Tasks**

✅ **Predict the output before running these:**

```js
var globalVar = "Global";

function test() {
  var functionVar = "Function Scope";
  if (true) {
    let blockVar = "Block Scope";
    var functionVar2 = "Still Function Scope";
  }
  console.log(globalVar); // ???
  console.log(functionVar); // ???
  console.log(blockVar); // ???
  console.log(functionVar2); // ???
}

test();
console.log(globalVar); // ???
console.log(functionVar); // ???
```

🔹 Try debugging errors and understanding **why they happen!** 🚀

# Understand closures with examples

**🔥 JavaScript Closures 🔥**

Closures are **one of the most powerful concepts in JavaScript**.

### **🔹 What is a Closure?**

A closure is **a function that remembers the variables from its outer function even after the outer function has finished executing**.

✅ **A closure is created when:**  
1️⃣ A function is **inside another function** (nested function).  
2️⃣ The **inner function accesses variables from the outer function**.  
3️⃣ The outer function **returns** the inner function.

---

## **1️⃣ Basic Example of a Closure**

```js
function outerFunction() {
  let outerVar = "I am from outer";

  function innerFunction() {
    console.log(outerVar); // ✅ Can access outerVar
  }

  return innerFunction;
}

const closureFunc = outerFunction(); // outerFunction runs and returns innerFunction
closureFunc(); // Still remembers outerVar even though outerFunction has finished
```

✅ **Output:**

```
I am from outer
```

🔹 **Why does this work?**  
Even though `outerFunction` has finished executing, `innerFunction` **remembers** `outerVar` due to closure.

---

## **2️⃣ Closures with a Counter (Practical Use Case)**

Closures **help maintain private variables** in JavaScript.

```js
function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++; // Modifies private variable
    console.log("Counter:", count);
  };
}

const counter = createCounter();
counter(); // Counter: 1
counter(); // Counter: 2
counter(); // Counter: 3
```

✅ **Output:**

```
Counter: 1
Counter: 2
Counter: 3
```

🔹 **Why use closures here?**  
🔹 The `count` variable is **protected** and **cannot be accessed directly from outside**.

---

## **3️⃣ Closures with Parameters**

Closures can **remember function arguments**.

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
console.log(double(10)); // 20

const triple = multiplier(3);
console.log(triple(5)); // 15
```

✅ **Output:**

```
10
20
15
```

🔹 **How does this work?**

- `double` **remembers** `factor = 2`
- `triple` **remembers** `factor = 3`
- The inner function **multiplies the number with the remembered factor**.

---

## **4️⃣ Closures for Data Privacy (Avoid Global Variables)**

Closures **help protect data from being modified accidentally**.

```js
function bankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  return {
    deposit: function (amount) {
      balance += amount;
      console.log(`Deposited: ₹${amount}. New Balance: ₹${balance}`);
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ₹${amount}. New Balance: ₹${balance}`);
      }
    },
    checkBalance: function () {
      console.log(`Balance: ₹${balance}`);
    },
  };
}

const myAccount = bankAccount(1000);
myAccount.deposit(500); // Deposited: ₹500. New Balance: ₹1500
myAccount.withdraw(300); // Withdrawn: ₹300. New Balance: ₹1200
myAccount.checkBalance(); // Balance: ₹1200
```

✅ **Output:**

```
Deposited: ₹500. New Balance: ₹1500
Withdrawn: ₹300. New Balance: ₹1200
Balance: ₹1200
```

🔹 **Why use closures?**  
🔹 `balance` is **private** and **cannot be accessed directly**.

```js
console.log(myAccount.balance); // ❌ Undefined! (Protected by closure)
```

---

## **5️⃣ Closures in `setTimeout` (Common Pitfall)**

Closures **capture the variable reference, not its value**.

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

✅ **Expected Output (Wrong Behavior)**

```
4
4
4
```

❌ **Why does this happen?**

- `var i` is function-scoped, not block-scoped.
- The loop runs first, `i` becomes 4.
- By the time `setTimeout` runs, `i = 4`.

✅ **Fix using `let` (Block Scope)**

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

✅ **Correct Output**

```
1
2
3
```

💡 **`let` creates a new scope for each iteration!** 🚀

---

## **🚀 Active Learning Tasks**

✅ **Predict the output before running these:**

```js
function outer(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = outer(5);
console.log(add5(10)); // ???
console.log(add5(20)); // ???

const add10 = outer(10);
console.log(add10(10)); // ???
```

```js
function secretMessage() {
  let message = "This is a secret!";
  return function () {
    console.log(message);
  };
}

const reveal = secretMessage();
reveal(); // ???
console.log(message); // ???
```

---

## **🔥 Summary**

✔ **Closures allow functions to "remember" variables from their outer scope.**  
✔ **Useful for private variables, stateful functions, and avoiding global pollution.**  
✔ **Common use cases: Counters, Data Privacy, Event Handlers, `setTimeout`.**

🚀 **Master closures and level up your JavaScript skills!**

# Master this keyword and implicit/explicit binding

**🔥 Mastering `this` Keyword & Binding in JavaScript 🔥**

The `this` keyword in JavaScript **refers to the object that is executing the current function**.  
But **its value depends on how the function is called** (not where it is defined).

---

**🔹 1️⃣ Understanding `this` in Different Contexts**

### **🔹 Global Context (Outside Any Function)**

```js
console.log(this);
```

✅ In the **browser**, `this` refers to the `window` object.  
✅ In **Node.js**, `this` is `{}` (an empty object in a module).

---

### **🔹 2️⃣ `this` Inside a Function**

```js
function show() {
  console.log(this);
}

show();
```

✅ **In non-strict mode (`this` is `window`)**  
✅ **In strict mode (`this` is `undefined`)**

```js
"use strict";
function show() {
  console.log(this);
}
show(); // undefined
```

💡 **Why?** In strict mode, JavaScript prevents accidental global object modification.

---

### **🔹 3️⃣ `this` Inside an Object Method**

When calling a function as an **object method**, `this` refers to the **object itself**.

```js
const obj = {
  name: "Gagan",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet(); // ✅ Hello, Gagan
```

💡 **Why?** `this` refers to the `obj` because `greet()` is called as `obj.greet()`.

---

### **🔹 4️⃣ `this` in Arrow Functions (`=>`)**

Arrow functions **do not have their own `this`**. They inherit `this` from their **enclosing scope**.

```js
const obj = {
  name: "Gagan",
  greet: () => {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet(); // ❌ Undefined (Arrow function takes `this` from global scope)
```

💡 **Fix: Use a normal function**

```js
const obj = {
  name: "Gagan",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

obj.greet(); // ✅ Hello, Gagan
```

---

**🔹 5️⃣ The Four Types of `this` Binding**

### **🔹 (1) Default Binding (Global Scope)**

When calling a function normally, `this` refers to the **global object** (`window` in browsers).

```js
function show() {
  console.log(this);
}

show(); // ✅ window (or `global` in Node.js)
```

---

### **🔹 (2) Implicit Binding (Object Method)**

If a function is called **inside an object**, `this` refers to **the object**.

```js
const user = {
  name: "Gagan",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

user.greet(); // ✅ "Hello, Gagan"
```

💡 **`this` refers to `user` because `greet()` is called on `user`**.

---

### **🔹 (3) Explicit Binding (`call`, `apply`, `bind`)**

You can **manually set `this`** using `call`, `apply`, or `bind`.

#### ✅ **`call()`** - Calls function with an explicit `this`

```js
function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Gagan" };

greet.call(user); // ✅ Hello, Gagan
```

#### ✅ **`apply()`** - Same as `call()`, but takes arguments as an array

```js
function introduce(age, city) {
  console.log(
    `Hello, my name is ${this.name}, I am ${age} years old from ${city}.`
  );
}

const user = { name: "Gagan" };

introduce.apply(user, [25, "Bangalore"]);
// ✅ Hello, my name is Gagan, I am 25 years old from Bangalore.
```

#### ✅ **`bind()`** - Returns a new function with a fixed `this`

```js
const person = { name: "Gagan" };

function greet() {
  console.log(`Hello, ${this.name}`);
}

const greetGagan = greet.bind(person);
greetGagan(); // ✅ Hello, Gagan
```

💡 **`bind()` does not call the function immediately**—it returns a new function with `this` bound.

---

### **🔹 (4) `this` in Constructor Functions**

When using `new`, `this` refers to **the new object being created**.

```js
function User(name) {
  this.name = name;
}

const user1 = new User("Gagan");
console.log(user1.name); // ✅ Gagan
```

---

**🚀 Active Learning Tasks**
✅ **Predict the output before running these:**

```js
const obj = {
  name: "Gagan",
  print: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

obj.print(); // ???
```

💡 **Fix using arrow function:**

```js
const obj = {
  name: "Gagan",
  print: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj.print(); // ✅ Gagan
```

✅ **Try using `call`, `apply`, and `bind` to change `this`.**

---

## **🔥 Summary**

| 🔥 **Binding Type**  | 🔥 **How `this` is determined**                          |
| -------------------- | -------------------------------------------------------- |
| **Default Binding**  | Global object (`window` in browser, `global` in Node.js) |
| **Implicit Binding** | `this` refers to the object calling the function         |
| **Explicit Binding** | `call()`, `apply()`, `bind()` manually set `this`        |
| **New Binding**      | `this` refers to the newly created object in constructor |

🚀 **Master `this` and ace your JavaScript interviews!**

# Learn ES6+ features (let, const, template literals, arrow functions, spread/rest, destructuring, optional chaining)

**🔥 ES6+ Features You Must Learn for JavaScript Interviews 🔥**

ES6 (ECMAScript 2015) and later versions introduced powerful features that make JavaScript more readable, concise, and efficient. Below is a complete guide with examples for each major ES6+ feature.

---

## **🔹 1️⃣ `let` and `const` (Block Scope & Immutable Variables)**

Before ES6, JavaScript only had `var`, which has **function scope** and is hoisted. ES6 introduced `let` and `const`, which have **block scope**.

### ✅ **Using `let`**

```js
let age = 25;
age = 26; // ✅ Allowed
console.log(age); // 26
```

- `let` **can** be reassigned but **cannot** be redeclared in the same scope.
- It has **block scope**, meaning it is only accessible within `{}`.

### ❌ **Using `var` (Avoid This)**

```js
if (true) {
  var x = 10;
}
console.log(x); // ✅ 10 (var is function-scoped, not block-scoped)
```

### ✅ **Using `const` (Immutable Variables)**

```js
const PI = 3.14;
PI = 3.1415; // ❌ Error: Assignment to constant variable
```

- `const` **must** be initialized during declaration.
- **Immutable reference**, but **mutable objects**:

```js
const user = { name: "Gagan" };
user.name = "Suresh"; // ✅ Allowed (Object properties can change)
console.log(user); // { name: "Suresh" }
```

---

## **🔹 2️⃣ Template Literals (Backticks `` ` ` `)**

Before ES6, string concatenation was messy:

```js
let name = "Gagan";
console.log("Hello, " + name + "! Welcome."); // ❌ Ugly syntax
```

### ✅ **Using Template Literals**

```js
let name = "Gagan";
console.log(`Hello, ${name}! Welcome.`); // ✅ Clean & readable
```

- Supports **multiline strings**:

```js
const message = `This is line 1
This is line 2`;
console.log(message);
```

---

## **🔹 3️⃣ Arrow Functions (`=>`)**

Arrow functions provide a **shorter syntax** and **do not have their own `this`**.

### ✅ **Example**

```js
const add = (a, b) => a + b;
console.log(add(5, 3)); // ✅ 8
```

- Implicit `return` if **one-liner**.
- If **multiple lines**, use `{}`:

```js
const multiply = (a, b) => {
  console.log("Multiplying...");
  return a * b;
};
console.log(multiply(4, 2)); // ✅ 8
```

💡 **Arrow functions do NOT have their own `this`**

```js
const user = {
  name: "Gagan",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // ✅ "Hello, Gagan"
    }, 1000);
  },
};
user.greet();
```

Here, `this` refers to `user` (lexical `this`), because arrow functions inherit `this` from the surrounding scope.

---

## **🔹 4️⃣ Spread (`...`) and Rest (`...`) Operators**

The `...` operator is used in **two ways**:
1️⃣ **Spread Operator** – Expands an array/object  
2️⃣ **Rest Operator** – Collects arguments

### ✅ **Using Spread (`...`)**

```js
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // ✅ [1, 2, 3, 4, 5]
```

💡 **Works with Objects**

```js
const user = { name: "Gagan", age: 25 };
const updatedUser = { ...user, city: "Bangalore" };
console.log(updatedUser); // ✅ { name: "Gagan", age: 25, city: "Bangalore" }
```

### ✅ **Using Rest (`...`) in Functions**

```js
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // ✅ 10
```

---

## **🔹 5️⃣ Destructuring (Extract Values Easily)**

Destructuring makes it easy to **extract values from objects/arrays**.

### ✅ **Array Destructuring**

```js
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second); // ✅ 10 20
```

### ✅ **Object Destructuring**

```js
const person = { name: "Gagan", age: 25, city: "Bangalore" };
const { name, city } = person;
console.log(name, city); // ✅ "Gagan Bangalore"
```

💡 **Renaming while destructuring**

```js
const { name: fullName, age } = person;
console.log(fullName); // ✅ "Gagan"
```

---

## **🔹 6️⃣ Optional Chaining (`?.`)**

Optional chaining (`?.`) prevents errors when accessing nested properties that may not exist.

### ✅ **Without Optional Chaining**

```js
const user = { name: "Gagan", address: { city: "Bangalore" } };
console.log(user.address.city); // ✅ "Bangalore"
console.log(user.contact.phone); // ❌ Error: Cannot read property 'phone'
```

### ✅ **With Optional Chaining (`?.`)**

```js
console.log(user.contact?.phone); // ✅ undefined (No Error)
```

💡 **Works with functions too**

```js
user.sayHello?.(); // ✅ No Error, even if sayHello() is undefined
```

---

**🚀 Active Learning Tasks**
✅ **Rewrite the following using ES6 features:**

```js
var person = { name: "Gagan", age: 25 };
var city = person.city ? person.city : "Unknown";
console.log(person.name + " is " + person.age + " years old from " + city);
```

💡 **Solution (Using Destructuring & Template Literals)**

```js
const person = { name: "Gagan", age: 25 };
const { city = "Unknown" } = person;
console.log(`${person.name} is ${person.age} years old from ${city}`);
```

✅ **Write an arrow function that takes multiple arguments using the rest operator.**  
✅ **Use spread to copy and modify an array.**  
✅ **Create an object and extract properties using destructuring.**

---

**🔥 Summary Table**
| Feature | Description |
|---------|------------|
| **`let` & `const`** | `let` (block-scoped, reassignable), `const` (block-scoped, immutable) |
| **Template Literals** | Use backticks `` ` ` `` for cleaner string interpolation |
| **Arrow Functions (`=>`)** | Shorter function syntax, no own `this` |
| **Spread (`...`)** | Expands arrays/objects |
| **Rest (`...`)** | Gathers function arguments |
| **Destructuring** | Extracts values from arrays/objects |
| **Optional Chaining (`?.`)** | Prevents errors when accessing undefined properties |

🚀 **Master these ES6+ features and ace your JavaScript interviews!**

# Understand higher-order functions (map, filter, reduce)

    **🔥 Higher-Order Functions in JavaScript (map, filter, reduce) 🔥**

Higher-order functions are functions that **take other functions as arguments** or **return functions**. In JavaScript, `map()`, `filter()`, and `reduce()` are the most commonly used higher-order functions for working with arrays.

---

## **🔹 1️⃣ `map()` – Transform Each Element**

The `map()` method creates a **new array** by applying a function to **each element** of the original array.

### ✅ **Example: Convert Prices from INR to USD**

```js
const pricesInINR = [100, 200, 300];
const conversionRate = 0.012; // 1 INR = 0.012 USD

const pricesInUSD = pricesInINR.map((price) => price * conversionRate);
console.log(pricesInUSD); // ✅ [1.2, 2.4, 3.6]
```

💡 **Key Points:**

- `map()` **returns a new array** (does not modify the original).
- It applies the function to **each** element in the array.

### ✅ **Example: Convert an Array of Names to Uppercase**

```js
const names = ["gagan", "suresh", "developer"];
const upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames); // ✅ ["GAGAN", "SURESH", "DEVELOPER"]
```

---

## **🔹 2️⃣ `filter()` – Select Elements Based on a Condition**

The `filter()` method **returns a new array** containing elements that **pass a condition**.

### ✅ **Example: Filter Out Even Numbers**

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // ✅ [2, 4, 6]
```

### ✅ **Example: Get Users Who Are Adults**

```js
const users = [
  { name: "Gagan", age: 25 },
  { name: "Ravi", age: 17 },
  { name: "Asha", age: 30 },
];

const adults = users.filter((user) => user.age >= 18);
console.log(adults);
// ✅ [{ name: "Gagan", age: 25 }, { name: "Asha", age: 30 }]
```

💡 **Key Points:**

- `filter()` only **keeps** elements that **pass** the condition.
- It does **not** modify the original array.

---

## **🔹 3️⃣ `reduce()` – Combine All Elements into a Single Value**

The `reduce()` method **reduces an array** to a **single value** by applying a function **iteratively**.

### ✅ **Example: Find the Sum of an Array**

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // ✅ 15
```

💡 **How `reduce()` Works Here:**

1. `acc = 0`, `num = 1` → `acc = 0 + 1 = 1`
2. `acc = 1`, `num = 2` → `acc = 1 + 2 = 3`
3. `acc = 3`, `num = 3` → `acc = 3 + 3 = 6`
4. `acc = 6`, `num = 4` → `acc = 6 + 4 = 10`
5. `acc = 10`, `num = 5` → `acc = 10 + 5 = 15`

---

### ✅ **Example: Find Maximum Value in an Array**

```js
const numbers = [10, 5, 8, 20, 3];

const maxNumber = numbers.reduce(
  (max, num) => (num > max ? num : max),
  numbers[0]
);

console.log(maxNumber); // ✅ 20
```

💡 **How It Works:**

- The `max` variable stores the **largest value seen so far**.
- If `num` is greater than `max`, update `max`.

---

### ✅ **Example: Count the Occurrences of Each Item**

```js
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);
// ✅ { apple: 3, banana: 2, orange: 1 }
```

💡 **Key Points:**

- `reduce()` can be used to **group elements** in an array.
- The accumulator (`acc`) starts as `{}` (an empty object).

---

**🚀 Active Learning Tasks**
✅ **Rewrite the following using `map()`, `filter()`, or `reduce()`**

```js
const numbers = [1, 2, 3, 4, 5];
// Task 1: Double each number
// Task 2: Get numbers greater than 3
// Task 3: Calculate the total sum
```

✅ **Create an array of student objects and use `filter()` to find those who scored above 75.**  
✅ **Use `reduce()` to count the number of occurrences of words in an array.**  
✅ **Find the longest word in an array using `reduce()`.**

---

**🔥 Summary Table**
| Function | Purpose | Returns |
|----------|---------|---------|
| **`map()`** | Transforms each element | New array |
| **`filter()`** | Selects elements based on a condition | New array |
| **`reduce()`** | Reduces array to a single value | Single value |

🚀 **Master these higher-order functions and ace your JavaScript interviews!**

# Learn DOM Manipulation

**🔥 DOM Manipulation in JavaScript – A Complete Guide 🔥**

The **Document Object Model (DOM)** allows JavaScript to **interact with and modify HTML & CSS** dynamically. This is essential for building interactive web applications.

---

## **🚀 1️⃣ Selecting Elements**

To manipulate the DOM, you first need to **select** elements. There are multiple ways to do this:

### ✅ **Using `getElementById` (Single Element)**

```js
const heading = document.getElementById("main-title");
console.log(heading); // Logs the element with id "main-title"
```

### ✅ **Using `getElementsByClassName` (Multiple Elements, Live Collection)**

```js
const items = document.getElementsByClassName("list-item");
console.log(items); // HTMLCollection of elements with class "list-item"
```

### ✅ **Using `getElementsByTagName` (Multiple Elements, Live Collection)**

```js
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // HTMLCollection of <p> elements
```

### ✅ **Using `querySelector` (First Match)**

```js
const firstItem = document.querySelector(".list-item");
console.log(firstItem); // First element with class "list-item"
```

### ✅ **Using `querySelectorAll` (All Matches, NodeList)**

```js
const allItems = document.querySelectorAll(".list-item");
console.log(allItems); // NodeList of elements with class "list-item"
```

💡 **Key Difference:**

- `getElementsByClassName` / `getElementsByTagName` return **live collections** (auto-update when DOM changes).
- `querySelectorAll` returns a **static NodeList** (does not auto-update).

---

## **🚀 2️⃣ Modifying Elements**

Once you select an element, you can modify its **text, HTML, attributes, or styles**.

### ✅ **Change Text Content**

```js
const heading = document.getElementById("main-title");
heading.textContent = "JavaScript DOM Mastery!";
```

### ✅ **Change Inner HTML**

```js
const content = document.querySelector("#content");
content.innerHTML = "<h2>New Content Added!</h2>";
```

### ✅ **Change Attributes**

```js
const link = document.querySelector("a");
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");
```

💡 **Alternative:**

```js
link.href = "https://google.com";
```

### ✅ **Change Styles**

```js
const box = document.querySelector(".box");
box.style.backgroundColor = "blue";
box.style.fontSize = "20px";
```

---

## **🚀 3️⃣ Adding & Removing Elements**

You can dynamically add or remove elements in the DOM.

### ✅ **Create and Append Elements**

```js
const newItem = document.createElement("li");
newItem.textContent = "New List Item";

const list = document.querySelector("ul");
list.appendChild(newItem); // Adds at the end
```

### ✅ **Insert Before a Specific Element**

```js
const referenceItem = document.querySelector(".list-item");
list.insertBefore(newItem, referenceItem);
```

### ✅ **Remove an Element**

```js
newItem.remove(); // Removes the newly added item
```

💡 **Older Method (for older browsers)**

```js
list.removeChild(newItem);
```

---

## **🚀 4️⃣ Event Handling**

JavaScript can handle user interactions using event listeners.

### ✅ **Add an Event Listener**

```js
const button = document.querySelector("#clickMe");
button.addEventListener("click", function () {
  alert("Button Clicked!");
});
```

### ✅ **Remove an Event Listener**

```js
function showAlert() {
  alert("You clicked!");
}
button.addEventListener("click", showAlert);

// Remove after 5 seconds
setTimeout(() => {
  button.removeEventListener("click", showAlert);
}, 5000);
```

### ✅ **Event Object & Prevent Default**

```js
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents page reload
  console.log("Form Submitted!");
});
```

---

## **🚀 5️⃣ Traversing the DOM**

Navigating between parent, child, and sibling elements.

### ✅ **Parent Element**

```js
const child = document.querySelector(".child");
console.log(child.parentElement); // Gets the parent element
```

### ✅ **Child Elements**

```js
const parent = document.querySelector(".parent");
console.log(parent.children); // HTMLCollection of child elements
console.log(parent.firstElementChild); // First child
console.log(parent.lastElementChild); // Last child
```

### ✅ **Siblings**

```js
const item = document.querySelector(".list-item");
console.log(item.nextElementSibling); // Next sibling
console.log(item.previousElementSibling); // Previous sibling
```

---

## **🚀 6️⃣ ClassList – Add, Remove, Toggle Classes**

```js
const box = document.querySelector(".box");

// Add a class
box.classList.add("highlight");

// Remove a class
box.classList.remove("highlight");

// Toggle a class
box.classList.toggle("hidden"); // Adds if not present, removes if present
```

---

**🔥 Active Learning Tasks**
✅ **Create a button that changes the background color of a div when clicked.**  
✅ **Create a to-do list where you can add and remove items dynamically.**  
✅ **Write a form that prevents submission and logs input values to the console.**  
✅ **Implement an image slider using event listeners and `setAttribute`.**

---

**🔥 Summary Table**
| Action | Method |
|--------|--------|
| **Select Element** | `getElementById`, `querySelector` |
| **Modify Content** | `.textContent`, `.innerHTML` |
| **Modify Styles** | `.style.property` |
| **Modify Attributes** | `.setAttribute()`, `.getAttribute()` |
| **Add Element** | `.createElement()`, `.appendChild()` |
| **Remove Element** | `.remove()`, `.removeChild()` |
| **Event Handling** | `.addEventListener()`, `.removeEventListener()` |

🚀 **Master DOM Manipulation and build interactive web applications!**

# Understand event bubbling, capturing, delegation

**🔥 Understanding Event Bubbling, Capturing, and Delegation in JavaScript 🔥**

Events in JavaScript follow a specific propagation model that consists of **three phases**:

1. **Capturing Phase (Trickling Down)**
2. **Target Phase (Event Execution)**
3. **Bubbling Phase (Propagating Up)**

---

## **🚀 1️⃣ Event Bubbling (Bottom → Up)**

- When an event occurs on a child element, it **bubbles up** through its ancestors.
- The event is first triggered on the **targeted element**, then moves **up** through parent elements until it reaches the `<html>` element.

### ✅ **Example of Event Bubbling**

```js
document.getElementById("child").addEventListener("click", function () {
  alert("Child Clicked!");
});

document.getElementById("parent").addEventListener("click", function () {
  alert("Parent Clicked!");
});

document.getElementById("grandparent").addEventListener("click", function () {
  alert("Grandparent Clicked!");
});
```

### **🧐 What Happens When You Click on "Child"?**

1. `Child Clicked!` (child event fires first)
2. `Parent Clicked!` (bubbles up to parent)
3. `Grandparent Clicked!` (bubbles up further)

💡 **Event bubbling is the default behavior.** If you want to stop it from bubbling up, use:

```js
event.stopPropagation();
```

---

## **🚀 2️⃣ Event Capturing (Top → Down)**

- Also called **Event Trickling**.
- The event starts from the **top-most parent element** and goes **down to the target element**.

### ✅ **Enable Event Capturing**

```js
document.getElementById("grandparent").addEventListener(
  "click",
  function () {
    alert("Grandparent Capturing Click!");
  },
  true // 👈 Pass `true` to enable capturing mode
);
```

### **🧐 What Happens When You Click on "Child"?**

1. `Grandparent Capturing Click!` (captures event first)
2. `Parent Clicked!`
3. `Child Clicked!`

💡 **By default, JavaScript uses event bubbling.** You must explicitly pass `true` to use event capturing.

---

## **🚀 3️⃣ Event Delegation (Efficient Event Handling)**

- Instead of adding event listeners to multiple elements, add a **single event listener to a common ancestor**.
- Useful for handling **dynamically created elements**.

### ✅ **Example of Event Delegation**

```js
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Item Clicked: " + event.target.textContent);
  }
});
```

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### **🧐 Why Use Event Delegation?**

✅ Reduces memory usage (only one event listener for many elements).  
✅ Works for dynamically added elements.

---

## **🔥 Active Learning Tasks**

✅ **Create a nested div structure and test event bubbling & capturing.**  
✅ **Use `stopPropagation()` to prevent event bubbling.**  
✅ **Implement event delegation on a to-do list (click to remove items).**

🚀 **Mastering these concepts makes you a pro at event handling in JavaScript!** 🚀

# <br/> <br/>

# Asynchronous JavaScript

# Understand callback functions

**🔥 Understanding Callback Functions in JavaScript 🔥**

A **callback function** is a **function passed as an argument** to another function. It allows asynchronous programming and **function execution control**.

---

## **🚀 1️⃣ Basic Callback Function Example**

```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Gagan", sayGoodbye);
```

### **🧐 Output:**

```
Hello, Gagan
Goodbye!
```

💡 **`sayGoodbye` is passed as a callback and executed after `greet()` finishes.**

---

## **🚀 2️⃣ Callbacks in Asynchronous JavaScript**

Callbacks are commonly used in **setTimeout, setInterval, event listeners, and API calls**.

### ✅ **Example: Using `setTimeout()`**

```js
console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
```

### **🧐 Output (Async Behavior)**

```
Start
End
This runs after 2 seconds
```

💡 **Even though `setTimeout()` is executed first, it runs after 2 seconds due to async behavior.**

---

## **🚀 3️⃣ Callbacks in Array Methods**

Higher-order functions like `map()`, `filter()`, and `reduce()` use callback functions.

### ✅ **Example: Using `map()`**

```js
const numbers = [1, 2, 3, 4];

const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(squaredNumbers); // [1, 4, 9, 16]
```

💡 **`map()` calls the callback function for each array element.**

---

## **🚀 4️⃣ Callback Hell (Nested Callbacks Issue)**

- Callbacks can lead to **deep nesting** (difficult to read & maintain).
- Example of **Callback Hell**:

```js
setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);
```

💡 **Solution: Use Promises or Async/Await.**

---

## **🔥 Active Learning Tasks**

✅ **Create a function that takes a callback and calls it after a delay.**  
✅ **Use a callback to filter out odd numbers from an array.**  
✅ **Convert a callback-based function into a Promise.**

🚀 **Master callbacks to better understand JavaScript async execution!** 🚀

# Learn promises

**🔥 Mastering Promises in JavaScript 🔥**

A **Promise** in JavaScript is an object that represents the **eventual completion (or failure)** of an asynchronous operation. It allows you to write **cleaner and more manageable async code** compared to callbacks.

---

## **🚀 1️⃣ Understanding Promise States**

A Promise has **three states**:

1. **Pending** → The initial state (waiting for the result).
2. **Fulfilled** → The operation completed successfully (`resolve()` is called).
3. **Rejected** → The operation failed (`reject()` is called).

---

## **🚀 2️⃣ Creating a Basic Promise**

A Promise is created using the `new Promise()` constructor.

### ✅ **Example: Simple Promise**

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true; // Change to false to see rejection
  setTimeout(() => {
    if (success) {
      resolve("✅ Task Completed!");
    } else {
      reject("❌ Task Failed!");
    }
  }, 2000);
});

// Handling the Promise
myPromise
  .then((message) => console.log(message)) // Runs on resolve
  .catch((error) => console.log(error)) // Runs on reject
  .finally(() => console.log("🎯 Promise Execution Finished"));
```

### **🧐 Output (if success = true)**

```
✅ Task Completed!
🎯 Promise Execution Finished
```

### **🧐 Output (if success = false)**

```
❌ Task Failed!
🎯 Promise Execution Finished
```

💡 **`.then()` runs when the promise is resolved.**  
💡 **`.catch()` runs when the promise is rejected.**  
💡 **`.finally()` always runs (whether resolved or rejected).**

---

## **🚀 3️⃣ Chaining Promises**

- **Each `.then()` returns a new Promise**, allowing us to chain multiple `.then()` calls.
- This prevents **callback hell** and makes async code more readable.

### ✅ **Example: Chaining Multiple `.then()`**

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("📦 Data Received"), 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // "📦 Data Received"
    return "🔄 Processing Data...";
  })
  .then((message) => {
    console.log(message);
    return "✅ Data Processed!";
  })
  .then(console.log) // Logs "✅ Data Processed!"
  .catch(console.error)
  .finally(() => console.log("🎯 Task Completed"));
```

### **🧐 Output**

```
📦 Data Received
🔄 Processing Data...
✅ Data Processed!
🎯 Task Completed
```

💡 **Each `.then()` receives the returned value from the previous `.then()`.**

---

## **🚀 4️⃣ Handling Multiple Promises**

Sometimes, you need to handle multiple Promises simultaneously. JavaScript provides methods like `Promise.all()`, `Promise.race()`, `Promise.allSettled()`, and `Promise.any()`.

### ✅ **Using `Promise.all()`**

- Waits for **all** promises to complete.
- If **any** promise fails, the whole operation fails.

```js
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("🥇 Task 1"), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("🥈 Task 2"), 2000)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("🥉 Task 3"), 1500)
);

Promise.all([p1, p2, p3]).then(console.log);
// Output: ["🥇 Task 1", "🥈 Task 2", "🥉 Task 3"]
```

### ✅ **Using `Promise.race()`**

- Returns the **first completed** promise (either resolved or rejected).

```js
Promise.race([p1, p2, p3]).then(console.log);
// Output: 🥇 Task 1 (because it completes first)
```

### ✅ **Using `Promise.allSettled()`**

- Waits for **all** promises to complete, whether resolved or rejected.

```js
const p4 = new Promise((_, reject) =>
  setTimeout(() => reject("❌ Failed Task"), 500)
);

Promise.allSettled([p1, p4]).then(console.log);
```

### ✅ **Using `Promise.any()`**

- Returns the **first resolved** promise.
- Ignores rejected promises unless all fail.

```js
Promise.any([p4, p1]).then(console.log);
// Output: 🥇 Task 1 (ignores the failed task)
```

---

## **🔥 Active Learning Tasks**

✅ **Create a Promise that resolves after 3 seconds and logs a message.**  
✅ **Chain multiple `.then()` calls to process fetched data.**  
✅ **Use `Promise.all()` to execute multiple API requests and log results.**

🚀 **Mastering Promises is essential for handling async JavaScript efficiently!** 🚀

# Master async/await and error handling

**🔥 Mastering `async/await` and Error Handling in JavaScript 🔥**

## **🚀 What is `async/await`?**

- `async/await` is a modern way to handle **asynchronous operations** in JavaScript.
- It **replaces `.then()` and `.catch()`** for a more readable and synchronous-looking code.
- `async` functions **always return a Promise**.

---

## **🚀 1️⃣ Converting a Promise to `async/await`**

### ✅ **Using Promises (Traditional Way)**

```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("📦 Data Received"), 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

### ✅ **Using `async/await` (Modern Approach)**

```js
async function getData() {
  let data = await fetchData(); // Wait until the promise resolves
  console.log(data);
}

getData();
```

💡 **`await` pauses execution until the Promise is resolved.**  
💡 **No need for `.then()`, making code cleaner and readable.**

---

## **🚀 2️⃣ Handling Errors in `async/await`**

If a promise **rejects**, we must handle the error using `try...catch`.

### ✅ **Example: Handling Errors in `async/await`**

```js
async function fetchWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("❌ Failed to fetch data!"), 2000);
  });
}

async function getData() {
  try {
    let data = await fetchWithError();
    console.log(data);
  } catch (error) {
    console.error("⚠️ Error:", error);
  } finally {
    console.log("🎯 Process completed");
  }
}

getData();
```

### **🧐 Output**

```
⚠️ Error: ❌ Failed to fetch data!
🎯 Process completed
```

💡 **`try...catch` ensures graceful error handling without breaking execution.**  
💡 **`finally` runs whether the operation succeeds or fails.**

---

## **🚀 3️⃣ `async/await` with API Calls**

You can use `async/await` to fetch data from an API.

### ✅ **Example: Fetching Data from an API**

```js
async function fetchUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("⚠️ Fetch Error:", error);
  }
}

fetchUser();
```

💡 **No more `.then().catch()` chaining – just clean and readable code!**  
💡 **`await` ensures we only proceed after fetching and converting to JSON.**

---

## **🚀 4️⃣ Running Multiple Async Calls Simultaneously**

Use `Promise.all()` with `async/await` to run multiple asynchronous operations **in parallel**.

### ✅ **Example: Fetching Multiple Users at Once**

```js
async function fetchMultipleUsers() {
  try {
    let [user1, user2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users/2").then((res) =>
        res.json()
      ),
    ]);

    console.log("👤 User 1:", user1);
    console.log("👤 User 2:", user2);
  } catch (error) {
    console.error("⚠️ Error fetching users:", error);
  }
}

fetchMultipleUsers();
```

💡 **`Promise.all()` runs all API calls in parallel, improving performance.**

---

## **🔥 Active Learning Tasks**

✅ **Convert a `.then()`-based Promise to `async/await`.**  
✅ **Use `async/await` to fetch API data and log the results.**  
✅ **Handle errors gracefully using `try...catch`.**  
✅ **Use `Promise.all()` with `async/await` to fetch multiple data sources in parallel.**

🚀 **Mastering `async/await` is crucial for writing clean, efficient, and readable async JavaScript!** 🚀

# Know how event loop, microtasks, and macrotasks work

**🔥 Understanding Event Loop, Microtasks, and Macrotasks in JavaScript 🔥**

## **🚀 What is the Event Loop?**

The **Event Loop** is a mechanism in JavaScript that allows **asynchronous** code execution **without blocking** the main thread. It continuously checks the **Call Stack** and **Task Queue** to determine what should be executed next.

---

## **🚀 JavaScript Execution Model**

1. **Call Stack (Synchronous Tasks)**

   - Executes functions in a **LIFO (Last In, First Out)** order.
   - Each function call is pushed onto the stack and popped off after execution.

2. **Web APIs (Async Operations like `setTimeout`, `fetch`)**

   - Handles asynchronous operations like **timers, HTTP requests, and event listeners**.

3. **Task Queues:**

   - **Microtask Queue** (Higher priority) → `Promise.then()`, `MutationObserver`, `queueMicrotask()`
   - **Macrotask Queue** (Lower priority) → `setTimeout()`, `setInterval()`, `setImmediate()`, I/O operations

4. **Event Loop**
   - Checks if the **Call Stack** is empty.
   - If empty, it **processes microtasks first** and then **moves to macrotasks**.

---

## **🚀 1️⃣ Understanding Microtasks vs. Macrotasks**

### **✅ Microtasks (Higher Priority)**

- Run **immediately after the current function execution** and before the next rendering cycle.
- Examples:
  - **Promises (`.then()` and `.catch()`)**
  - `MutationObserver`
  - `queueMicrotask()`

### **✅ Macrotasks (Lower Priority)**

- Scheduled after microtasks.
- Examples:
  - `setTimeout()`
  - `setInterval()`
  - `setImmediate()`
  - I/O operations (e.g., file read/write)

---

## **🚀 2️⃣ Code Example: Microtasks vs. Macrotasks**

```js
console.log("1️⃣ Start");

// Macrotask (setTimeout)
setTimeout(() => console.log("5️⃣ Macrotask - setTimeout"), 0);

// Microtask (Promise.then)
Promise.resolve().then(() => console.log("3️⃣ Microtask - Promise"));

// Normal synchronous task
console.log("2️⃣ Sync Task");
```

### **🧐 Expected Output**

```
1️⃣ Start
2️⃣ Sync Task
3️⃣ Microtask - Promise
5️⃣ Macrotask - setTimeout
```

✅ **Microtasks execute before macrotasks**, even if both are scheduled at the same time.

---

## **🚀 3️⃣ Event Loop in Action**

### ✅ **Example: Multiple Microtasks & Macrotasks**

```js
console.log("1️⃣ Start");

// Macrotask
setTimeout(() => console.log("6️⃣ Macrotask - setTimeout"), 0);

// Microtask 1
Promise.resolve().then(() => {
  console.log("3️⃣ Microtask 1 - Promise");

  // Microtask inside Microtask
  Promise.resolve().then(() => console.log("4️⃣ Microtask 2 - Nested Promise"));
});

// Sync Task
console.log("2️⃣ Sync Task");

// Macrotask
setTimeout(() => console.log("7️⃣ Macrotask - setTimeout 2"), 0);
```

### **🧐 Expected Output**

```
1️⃣ Start
2️⃣ Sync Task
3️⃣ Microtask 1 - Promise
4️⃣ Microtask 2 - Nested Promise
6️⃣ Macrotask - setTimeout
7️⃣ Macrotask - setTimeout 2
```

✅ **Microtasks (`Promise.then()`) always execute before Macrotasks (`setTimeout()`).**  
✅ **Nested Microtasks are executed before moving to Macrotasks.**

---

## **🚀 4️⃣ Visualizing the Event Loop**

```plaintext
1. Execute synchronous code (Call Stack tasks)
2. Process all Microtasks (Promise.then, queueMicrotask)
3. Render UI updates (if needed)
4. Process one Macrotask (setTimeout, I/O)
5. Repeat from step 2
```

### ✅ **Event Loop Order**

```
1️⃣ Execute synchronous tasks in Call Stack
2️⃣ Process Microtasks
3️⃣ Process Macrotasks (only after all Microtasks are cleared)
4️⃣ Repeat
```

---

## **🔥 Active Learning Tasks**

✅ **Run an example where a `setTimeout()` and a `Promise.then()` are scheduled and observe the order.**  
✅ **Modify a nested microtask example and predict the output.**  
✅ **Use `queueMicrotask()` to schedule a microtask manually.**

🚀 **Understanding the Event Loop is key to mastering asynchronous JavaScript!** 🚀

#
