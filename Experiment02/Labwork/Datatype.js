// Symbol
const anotherId=Symbol('1234');
console.log(anotherId);

let ID = 123;
console.log(ID===anotherId);

// Array 

const arr=[1,2,3,4,5];
console.log(arr);

// Object declaration
const myObject = {
    name:"Shravani",
    PRN:"23UAM072",
    age:20
};
console.log(myObject);

// Function Declaration , call,defination : Activity
 
function call(){
    console.log("Shravani");
}
console.log(call());

let sum=function myFunction(){
    console.log(3+4);
}
sum();

// memory 
// Stack primitive use : whatever you can declare variable it gives copy
// and heap non-primitive : It gives reference original value

//stack example
let myYoutubeName="SRM";
let newChannel=myYoutubeName;
newChannel="Shravani M";

console.log(myYoutubeName);
console.log(newChannel);

// heap example

let user1={
    email:"abc@gmail.com",
    fname:"Shravu",
    ID:72
};

let user2=user1;
user2.email="PQRS123@gmai.com";
console.log(user1.email);
console.log(user2.email);

// primitive Datatype is stored in stack when we assign one variable to another a copy is made so changing one does not affect to others.
// Non-primitive datatype stored in heap memory when we assign one object to another variable reference is copied not the value so if we change one both variables are changes.






