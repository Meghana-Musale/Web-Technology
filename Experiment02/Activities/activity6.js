// 6)remove duplicate element in array

let arr1 = [10, 20, 10, 30, 40, 20, 50];

//Use the spread operator [...] to turn it back into an array
let arr2 = [... new Set(arr1)];//Set method is to quickly remove duplicate items from an array

console.log("Original Array:", arr1);
console.log("Unique Array:", arr2);
