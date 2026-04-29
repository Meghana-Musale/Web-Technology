//String to Number
let strToNumber = "44";
let num = Number(strToNumber); 
console.log(typeof num); // number

//Number to String
let age = 25;
let str1 = String(age);
console.log(typeof str1); // string

//Boolean Conversions
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); 
// 1 => true; 0 => false; "" => false; "hello" => true

// Conversion
console.log("5" + 2); // "52" (String concatenation)
console.log("5" - 2); // 3 (String converted to number for subtraction)