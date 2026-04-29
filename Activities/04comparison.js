// 1. Relational Operators (Greater/Less Than)
console.log(10 > 5);   // true  
console.log(5 < 3);    // false
console.log(10 >= 10); // true 
console.log(8 <= 12);  // true


// 2. Equality Operators 
//(==) : Checks value only
console.log("5" == 5);  // true: The string 5 is converted to a number before comparing
console.log(1 == true); // true: Boolean true is treated as 1

//(===) : Checks both Value & Data Type
console.log("5" === 5);  // false: Value is same but string is not equal to number
console.log(1 === true); // false: Value is equivalent but types different


// 3. Inequality Operators
//(!=)
console.log(5 != "5");  // false: They are considered equal after type conversion

//(!==)
console.log(5 !== "5"); // true: They are different because one is a number and one is a string


//Comparisons (Null and Undefined)
// null and undefined are loosely equal to each other but not to 0
console.log(null == undefined); // true
console.log(null === undefined); // false

/* Logic for Null comparisons:
   Comparisons (>, <, >=, <=) convert null to a number, treating it as 0.
   Equality checks (==) do not convert null to 0.
*/
console.log(null > 0);  // false (0 > 0 is false)
console.log(null == 0); // false (Equality check doesn't convert types here)
console.log(null >= 0); // true  (null is converted to 0, and 0 >= 0 is true)


