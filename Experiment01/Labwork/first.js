/*const does not change   */
let a = 10;
var b = 20; 
{
    let a = 200;
    var b = 300;
    console.log(a, b);
}
console.log(a, b);

//Variable declaration 
let myNum ;//undefined
let num1 = null;//null
let userId = 101;//number
let userEmail = "abc@gmail.com";//String
let userExist = true;//boolean
let bigInt = 1234567890987654321n;//bigint
console.log(myNum);
console.log(num1);
console.log(userId);
console.log(userEmail);
console.log(userExist);
console.log(bigInt);


