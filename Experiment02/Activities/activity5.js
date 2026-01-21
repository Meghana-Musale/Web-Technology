//5)find laragest element in array

const numbers = [10, 20, 30, 40, 50];
let largestNum = numbers[0];

for (i = 1; i < numbers.length; i++) {
    
    if (numbers[i] > largestNum) {
        largestNum = numbers[i]; 
    }
}


console.log(numbers);
console.log("The largest element is:", largestNum);