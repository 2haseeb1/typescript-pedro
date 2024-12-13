##TYPESCRIPT documentation

TypeScript improves upon JavaScript in terms of type safety by introducing static typing, which ensures that the types of variables, function parameters, and return values are known at compile time, rather than at runtime like in JavaScript. This brings several advantages, which are discussed below:

1. Static Type Checking
JavaScript: Being dynamically typed, JavaScript does not check types during development. Type errors can only be detected at runtime, potentially leading to bugs that are hard to track down and fix.
TypeScript: TypeScript performs static type checking during development. This means that errors related to type mismatches, undefined properties, or invalid operations are caught at compile time, before the code is even executed. This helps prevent runtime errors and makes the codebase more reliable.


```javascript
function greet() {
    console.log("Hello, World!");
}

greet();

```
```javascript
let num: number = 5;
num = "hello"; // Compile-time error: Type 'string' is not assignable to type 'number'
```
```javascript
let username: string = "John"; // The type is explicitly set as string
username = 123; // Error: Type 'number' is not assignable to type 'string'
```
## 3. Type Inference

JavaScript: JavaScript does not have type inference, so the type of a variable is only determined at runtime.
TypeScript: TypeScript has type inference, which means that it can automatically infer the type of a variable based on its value, even if you don't explicitly declare it. However, TypeScript still ensures the inferred types are consistent throughout the code.

```javascript
let count = 10; // TypeScript infers `count` as a number
count = "hello"; // Error: Type 'string' is not assignable to type 'number'
```
## 4. Preventing Common Errors
JavaScript: In JavaScript, you might accidentally perform operations on incompatible types, leading to unexpected behavior or errors during execution.
TypeScript: TypeScript prevents common errors by ensuring that operations between incompatible types are flagged at compile time.
```javascript
let str: string = "Hello";
let num: number = 5;
let result = str + num;  // JavaScript: result would be "Hello5"
// TypeScript: Error, cannot add string and number without explicit conversion.
```

## 5. Stronger Function Type Checking 

JavaScript: Functions in JavaScript can accept any type of argument, and return any type, without any type safety. This leads to the possibility of passing unexpected values to functions.
TypeScript: TypeScript allows you to specify the types of function parameters and the return type. This ensures that functions are called with the correct data types, preventing errors caused by unexpected arguments or return values        

```javascript
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);  // Correct
add(1, "2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```
## 6. Type Aliases and Interfaces
JavaScript: JavaScript does not have built-in structures to define custom types or ensure that objects adhere to specific structures.
TypeScript: TypeScript introduces type aliases and interfaces to define custom types and ensure that objects or classes conform to specific shapes. This allows you to define complex types and ensures that objects adhere to the expected structure, making the code more predictable and readable.

```javascript
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 30 };  // Correct
let person2: Person = { name: "John", age: "30" }; // Error: Type 'string' is not assignable to type 'number'
```