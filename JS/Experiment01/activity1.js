/* const studentName = "Meghana Musale";
const studentBranch = "AIML";
const studentID = "101";

document.write(studentName);
document.write(studentBranch);
document.write(studentID); */

let student = {
    name: "ABC",
    email: "abc@gmail.com",
    branch: "AIML",
    id: "101",
    active: true
};

document.write(`Student Name: ${student.name} <br>`);
document.write(`Email: ${student.email} <br>`);
document.write(`Branch: ${student.branch} <br>`);
document.write(`ID: ${student.id} <br>`);
document.write(`Active: ${student.active} <br>`);

