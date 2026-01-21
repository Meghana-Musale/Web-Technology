// 9)count vowels in string

let str = "Meghana";
let count = 0;
let vowels = "aeiouAEIOU";

for (let i = 0; i < str.length; i++) {
    // Check if the current character exists inside the vowels variable string
    if (vowels.includes(str[i])) {
        count++;
    }
}

console.log("String: " , str);
console.log("Total Vowels: " , count); 
