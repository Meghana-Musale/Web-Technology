let superHeroes=['abc','xyz','pqr'];
let fruits=['Apple','Banana','Mango','Cherry'];

/* superHeroes.push(fruits);
console.log(superHeroes);

console.log(superHeroes[2]);

console.log(superHeroes[2][2]); */

console.log(superHeroes.concat(fruits)); // Combine 2 or more arrays

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]; // Nested array
const realAnotherArr=anotherArray.flat(1); // nested array concat into one array
console.log(realAnotherArr);

//Data scripted this array asked que to is array
console.log(Array.isArray('abc')); // 

console.log(Array.from("abc")); // converts in to array

console.log(Array.from({name:""})); //empty arr

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));  // returns new array from set of elements
