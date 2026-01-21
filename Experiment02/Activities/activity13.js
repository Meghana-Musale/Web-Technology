// 13)write a code for sum of array

let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]; // Same as sum = sum + numbers[i]
}

console.log("Array:", numbers);
console.log("The total sum is:", sum); 

//using function
function getArraySum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

console.log(getArraySum([1, 2, 3, 4])); 