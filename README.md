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

## 7. Union and Intersection Types
JavaScript: JavaScript does not provide a native way to handle multiple possible types for a variable in a type-safe manner.
TypeScript: TypeScript allows the use of union types (which means a variable can be one of several types) and intersection types (combining multiple types together). This provides more flexibility while maintaining type safety.

```javascript
let value: string | number = 42;  // value can be either string or number
value = "hello";  // Valid
value = true;     // Error: Type 'boolean' is not assignable to type 'string | number'
```
## 8. What is an Intersection Type in TypeScript?
In TypeScript, an intersection type is a way to combine multiple types into one. This means that the resulting type will include all the properties from the combined types. An object of an intersection type must satisfy all the types involved.

```javascript
type IntersectionType = Type1 & Type2;
```
How It Works
When you use the & operator, TypeScript combines types into a single type that inherits all members from the participating types. This is useful when you need to merge several types into one and ensure that the result has all properties defined in the intersected types.

## Example 1: Combining Object Types
```javascript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  role: string;
};

type EmployeeDetails = Person & Employee;

const john: EmployeeDetails = {
  name: "John Doe",
  age: 30,
  company: "TechCorp",
  role: "Developer",
};
```
## Example 2: Combining Interfaces

```javascript
interface Shape {
  area: () => number;
}

interface Colorful {
  color: string;
}

type ColoredShape = Shape & Colorful;

const square: ColoredShape = {
  area: () => 25,
  color: "blue",
};
```
### Example 1: Simple Usage
Here’s how you can use this function signature in an interface:
```javascript
interface Shape {
  area: () => number;
}

const circle: Shape = {
  area: () => 3.14 * 5 * 5,  // Returns a number
};

console.log(circle.area());  // Output: 78.5
```
## How TypeScript Improves Type Safety Compared to JavaScript
TypeScript enhances type safety over JavaScript by introducing static typing, type inference, type checking, and other features that prevent type-related runtime errors. These improvements lead to more reliable, maintainable, and scalable code.
Key Type Safety Improvements in TypeScript
1. Static Type Checking (Compile-Time Safety)
JavaScript: Errors related to types are detected only at runtime.
### TypeScript: TypeScript checks types during compilation, catching issues before running the code. This prevents many runtime errors.
```javascript
let age: number = 25;
age = "twenty-five";  // Error: Type 'string' is not assignable to type 'number'
```
### 2. Explicit Type Annotations
Developers can declare types explicitly for variables, function parameters, and return values, making the code more predictable and easier to debug.
```javascript
example:
function greet(name: string): string {
  return `Hello, ${name}!`;
}

greet("Alice");    // Correct
greet(123);        // Error: Argument of type 'number' is not assignable to type 'string'
```

## What is Explicit Type Annotation in TypeScript?

Explicit Type Annotation in TypeScript means manually specifying the type of a variable, function parameter, return value, or property. This is done by adding a type annotation after the variable name using a colon : followed by the desired type.

### Why Use Explicit Type Annotations?
1. **Type Safety**: Prevents assigning incorrect types to variables.  
2. **Code Clarity**: Makes the code easier to understand and maintain.  
3. **Development Support**: Helps with code completion and better IDE suggestions.  

What is Explicit Type Annotation in TypeScript?
Explicit Type Annotation in TypeScript means manually specifying the type of a variable, function parameter, return value, or property. This is done by adding a type annotation after the variable name using a colon : followed by the desired type.

Why Use Explicit Type Annotations?
Type Safety: Prevents assigning incorrect types to variables.
Code Clarity: Makes the code easier to understand and maintain.
Development Support: Helps with code completion and better IDE suggestions.
### Syntax of Explicit Type Annotation
```json
let variableName: Type = value;
```
## 1. Variables

You can explicitly declare the type of a variable when defining it:
```javascript
let username: string = "Alice";    // Type is explicitly set to string
let age: number = 25;              // Type is number
let isLoggedIn: boolean = true;    // Type is boolean
```
## 2. Function Parameters and Return Types
Explicit type annotations help define what types a function can accept and return.
```javascript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("John"));   // Correct
// console.log(greet(123));   // Error: Argument of type 'number' is not assignable to type 'string'
```
## What is the any Type in TypeScript?
The any type in TypeScript is a special type that allows any value to be assigned to a variable, effectively disabling type checking. It tells the TypeScript compiler to bypass type enforcement, meaning the variable can hold values of any type—similar to how JavaScript variables behave.

### Syntax:
```javascript
let variableName: any;

example:
let age:any;
```
### Examples of Using any Type
1. Assigning Different Types
```javascript
let value: any;

value = "Hello";    // String
value = 42;         // Number
value = true;       // Boolean
value = { name: "John" };  // Object
```

