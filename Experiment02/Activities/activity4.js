// 4)write a code for fabinoccic series

let n = 10; 
let f = [0, 1]; 
let i;

for (i = 2; i < n; i++) {// Start the loop from index 2 because 0 and 1 are already defined
    
    f[i] = f[i - 1] + f[i - 2];
}

console.log(f); 
