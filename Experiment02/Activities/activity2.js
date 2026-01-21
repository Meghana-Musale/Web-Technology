function reverseNumber(num) {
    let reverse = 0;
    
    while (num !== 0) {
        let lastNum = num % 10;       
        reverse = (reverse * 10) + lastNum; 
        num = Math.floor(num / 10);      // floor Remove the last digit from original num
    }
    
    return reverse;
}

console.log(reverseNumber(123));  