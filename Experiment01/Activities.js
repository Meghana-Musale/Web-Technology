//Activity 1
console.log("Activity 1:Print Student data");
let student = {
    name: "Meghana Musale",
    email: "meghana@gmail.com",
    branch: "AIML",
    id: "101",
    active: true
};
console.log(`Student Name: ${student.name}`);
console.log(`Email: ${student.email}`);
console.log(`Branch: ${student.branch}`);
console.log(`ID: ${student.id}`);
console.log(`Active: ${student.active}`);

//Activity 2
console.log("Activity 2:Even or odd");
let a = 10;
if(a % 2 == 0){
    console.log("Value is even..")
}
else{
    console.log("Value is odd..")
}

//Activity 3
console.log("Activity 3: print number using loop");
let b = 1;
while(b<10){
    console.log(b);
    b++;
}

//Activity 4
console.log("Activity 4:Student pass or Fail");
let studentMarks =80;
if(studentMarks>=50){
    console.log("Student Pass");
}
else{
    console.log("Student Fail");
}