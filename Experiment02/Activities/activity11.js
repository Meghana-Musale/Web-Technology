// 11)for number check prime, factorial num

//Prime Number
function checkPrime(num) {
    if (num <= 1) return false; 

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
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
let n = 5;
let factorial = 1;

if (n < 0) {
    console.log("Factorial not defined for negative numbers");
} else {
    for (let i = 1; i <= n; i++) {
        factorial *= i; // Same as factorial = factorial * i
    }
    console.log("Factorial of " + n + " is: " + factorial);
}