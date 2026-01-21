// 3)check palindrome no.

let num = 454; 
let originalNum = num; 
let reverse = 0;

while (num > 0) {
    let lastNum = num % 10;
    reverse = (reverse * 10) + lastNum;
    num = Math.floor(num / 10);
}


if (originalNum === reverse) {
    console.log(originalNum , " is a Palindrome.");
} else {
    console.log(originalNum , " is not a Palindrome.");
}