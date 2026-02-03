// 1)array, function, declaration
console.log("Activity 1 : array, function, declaration");
// Array declaration
let numbers = [10, 20, 30, 40, 50];
console.log(numbers);
// Function declaration
function user(name) {
    return "Hello, " + name;
}
console.log(user("Meghana"));


// 2)write a code for for reverse number
console.log("Activity 2 :reverse number");
let num = 123; 
let reverse = 0;
console.log("Original Number: " , num);
while (num !== 0) {
    let lastNum = num % 10;             // Get the last digit
    reverse = (reverse * 10) + lastNum; // Append it to the reverse variable
    num = Math.floor(num / 10);         // floor is remove the last digit
}
console.log("Reversed Number: " , reverse);

// 3)check palindrome no.
console.log("Activity 3 :check palindrome number");
let num1 = 454; 
let originalNum = num1; 
let reverse1 = 0;

while (num1 > 0) {
    let lastNum = num1 % 10;
    reverse1 = (reverse1 * 10) + lastNum;
    num1 = Math.floor(num1 / 10);
}

if (originalNum === reverse1) {
    console.log(originalNum , " is a Palindrome.");
} else {
    console.log(originalNum , " is not a Palindrome.");
}

// 4)write a code for fabinoccic series
console.log("Activity 4 :fabinoccic series");

let n = 10; 
let f = [0, 1]; 
let i;
for (i = 2; i < n; i++) {// Start the loop from index 2 because 0 and 1 are already defined
    
    f[i] = f[i - 1] + f[i - 2];
}
console.log(f); 

//5)find laragest element in array
console.log("Activity 5 :laragest element in array");
const nums = [10, 20, 30, 40, 50];
let largestNum = nums[0];

for (i = 1; i < nums.length; i++) {
    
    if (nums[i] > largestNum) {
        largestNum = nums[i]; 
    }
}
console.log(nums);
console.log("The largest element is:", largestNum);

// 6)remove duplicate element in array
console.log("Activity 6 :remove duplicate element in array");
let arr1 = [10, 20, 10, 30, 40, 20, 50];

//Use the spread operator [...] to turn it back into an array
let arr2 = [... new Set(arr1)];//Set method is to quickly remove duplicate items from an array

console.log("Original Array:", arr1);
console.log("Unique Array:", arr2);

// 7)find missing num in array
console.log("Activity 7 :find missing num in array");
let arr = [1, 2, 4, 5, 6]; //3 is missing
let n1 = 6;
//(1+2+3+4+5+6)including missing value
let Sum1 = (n1 * (n1 + 1)) / 2;
let Sum2 = 0;
let j;
for (j = 0; j < arr.length; j++) {
    Sum2 = Sum2 + arr[j];//sum without missing value
}
let missingNum = Sum1 - Sum2;

console.log("Array:", arr);
console.log("The missing number is:", missingNum);


// 8)for string reverse a string
console.log("Activity 8 reverse a string:");
let str = "Meghana";
let reversedStr = str.split('').reverse().join('');
//Convert string to Array using split()
//Use the reverse() method
//Convert Array back to string using join()

console.log("Original String: " , str);
console.log("Reversed String: " , reversedStr);

// 9)count vowels in string
console.log("Activity 9 :count vowels in string");
let str1 = "Meghana";
let count = 0;
let vowels = "aeiouAEIOU";

for (let k = 0; k < str1.length; k++) {
    // Check if the current character exists inside the vowels variable string
    if (vowels.includes(str1[k])) {
        count++;
    }
}

console.log("String: " , str1);
console.log("Total Vowels: " , count);


// 10)check palindrome in string
console.log("Activity 10 :palindrome in string");
let str2 = "aabbaa";
let reversedStr2 = str2.split('').reverse().join('');

if (str2 === reversedStr2) {
    console.log(str2 , " is a palindrome");
} else {
    console.log(str2 , " is not a palindrome");
}


// 11)for number check prime num, factorial num
console.log("Activity 11 :check prime num, factorial num");

//Prime Number
function checkPrime(num2) {
    if (num2 <= 1) return false; 

    for (let i = 2; i < num2; i++) {
        if (num2 % i === 0) {
            return false; 
        }
    }
    return true; 
}
let number = 7;
if (checkPrime(number)) {
    console.log(number , " is a Prime Number");
} else {
    console.log(number , " is not a Prime Number");
}
//Factorial Number
let n3 = 5;
let factorial = 1;

if (n3 < 0) {
    console.log("Factorial not defined for negative numbers");
} else {
    for (let i = 1; i <= n3; i++) {
        factorial *= i; // Same as factorial = factorial * i
    }
    console.log("Factorial of " + n3 + " is: " + factorial);
}


// 12)functions --function to find a no is even or odd
console.log("Activity 12 :Even or odd function");
function evenOdd(num3) {
    if (num3 % 2 === 0) {
        return (num3 + " is Even");
    } else {
        return (num3 + " is Odd");
    }
}
console.log(evenOdd(10)); 
console.log(evenOdd(7));  


// 13)write a code for sum of array
console.log("Activity 13 : Sum of array");

let numbers2 = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers2.length; i++) {
    sum = sum + numbers2[i]; // Same as sum = sum + numbers[i]
}

console.log("Array:", numbers2);
console.log("The total sum is:", sum); 

//using function
/* function getArraySum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

console.log(getArraySum([1, 2, 3, 4]));  */