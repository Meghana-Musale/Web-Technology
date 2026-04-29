/*
=========================================================
Activity1 : where we use promises in company level?
=========================================================
Common company-level uses:
1. API Calls : 
    - Getting data from server.
    - Example: Fetching user data from backend.

2.Database Operations
    - Reading or writing data in database.

3. File Upload / Download :
    - Uploading images, documents etc.

Authentication :
    -Login / Signup request to server

5. Payment Processing :
    - Waiting for payment gateway response. 
    
*/

/* 
=========================================================
Activity2 : why promises are better than callback function?
=========================================================
Callback	                                    Promise
- Leads to callback hell(nested callbacks)	    - Clean and readable code
- Hard to manage errors	                        - Easy error handling using .catch()
- Difficult to maintain	                        - Easy to chain using .then()
- Code becomes messy	                        - Code becomes structured
*/

/* 
=========================================================
Activity3 : write a code for 4 ex of primses 
=========================================================
*/
//Example 1 : Simple Promise
let promise = new Promise(function(resolve, reject){
    let success = true;

    if(success){
        resolve("Task Completed");
    } else {
        reject("Task Failed");
    }
});

promise
.then(result => console.log(result))
.catch(error => console.log(error));

//Example 2 : Checking Even or Odd
function checkNumber(num){
    return new Promise((resolve, reject) => {
        if(num % 2 === 0){
            resolve("Number is Even");
        } else {
            reject("Number is Odd");
        }
    });
}

checkNumber(4)
.then(msg => console.log(msg))
.catch(err => console.log(err));

//Example 3 : Promise Chaining
let promise1 = new Promise((resolve) => {
    resolve(5);
});

promise1
.then(num => num * 2)
.then(result => console.log(result));

/* 
=========================================================
Activity4 : write one ex of promise with async , await 
=========================================================
*/
function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}

async function displayData(){
    let result = await getData();
    console.log(result);
}

displayData();