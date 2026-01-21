// 2)write a code for for reverse number

let num = 123; 
let reverse = 0;

console.log("Original Number: " , num);

while (num !== 0) {
    let lastNum = num % 10;             // Get the last digit
    reverse = (reverse * 10) + lastNum; // Append it to the reverse variable
    num = Math.floor(num / 10);         // floor is remove the last digit
}

console.log("Reversed Number: " , reverse);