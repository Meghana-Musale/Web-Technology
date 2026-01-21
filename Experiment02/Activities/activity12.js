// 12)functions --function to find a no is even or odd

function evenOdd(num) {
    if (num % 2 === 0) {
        return (num + " is Even");
    } else {
        return (num + " is Odd");
    }
}


console.log(evenOdd(10)); 
console.log(evenOdd(7));  