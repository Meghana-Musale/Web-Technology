//Difference between var, let, and const 
var V = "Var"; // Avoid using var it have function scope
let L = "Let";         // Use for values that change it have block scope
const C = "Const";  // Use for constants

//Data Types
// 1. Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
// 2. Non-Primitive: Objects, Arrays, Functions

let score = 100;                 // Number
let name = "Meghana";              // String
let isLoggedIn = true;           // Boolean
let state = null;                // Null 
let userEmail;                   // Undefined (Declared but not assigned)

//Checking types
console.log(typeof score);       
console.log(typeof state);    


// undefined: A variable is declared but has no value yet.
// null: An assignment value that represents "no value".