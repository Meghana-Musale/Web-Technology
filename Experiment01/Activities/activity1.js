/* const studentName = "Meghana Musale";
const studentBranch = "AIML";
const studentID = "101";

document.write(studentName);
document.write(studentBranch);
document.write(studentID); */

let student = {
    name: "ABC",
    email : "abc@gmail.com",
    branch: "AIML",
    id: "101",
    active: true
};

document.write(`Student Name: ${student.name}`);
document.write(`Email: ${student.email}`);
document.write(`Grade: ${student.branch}`);
document.write(`ID: ${student.id}`);
document.write(`Active: ${student.active}`);

