//Number methods
console.log(Number.isInteger(5));//it checks whole numbers(true/false)
console.log(Number.isNaN("abc"));//Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number)
console.log(Number.parseInt("10"));
console.log(Number.parseFloat("10.5"));
const balance = new Number(220000);
console.log(balance);
console.log(balance.toString());  //100
console.log(balance.toFixed(2));  //when we build e-commerce website and pricision value is so long than we use toFix.
console.log(balance.toString().length);  //3
console.log(balance.toLocaleString());  //1,00,000  it will add comma in number according to country format
console.log(balance.toLocaleString("en-IN"));  //1,00,000  it will add comma in number according to country format. used when large amount.

//math operations 
console.log(Math);
console.log(Math.abs(-4));  //negative value convert into positive value and positive will be positive.
console.log(Math.floor(4.6));  //it gives 4 value . choose top value
console.log(Math.ceil(4.6));  //it gives 5 value . choose bottom value 
console.log(Math.round(4.6)); //it gives 5 value . round off value
console.log(Math.min(1,2,3,4,5));   //gives minimun value
console.log(Math.max(5,6,4,7));     // gives maximun value 

console.log(Math.random()); //gives random value between 0 to 1