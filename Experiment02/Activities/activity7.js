// 7)find missing num in array

let arr = [1, 2, 4, 5, 6]; //3 is missing
let n = 6;
//(1+2+3+4+5+6)including missing value
let Sum1 = (n * (n + 1)) / 2;
let Sum2 = 0;
let i;
for (i = 0; i < arr.length; i++) {
    Sum2 = Sum2 + arr[i];//sum without missing value
}


let missingNum = Sum1 - Sum2;

console.log("Array:", arr);
console.log("The missing number is:", missingNum);