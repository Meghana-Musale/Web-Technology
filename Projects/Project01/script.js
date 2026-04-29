const submitBtn = document.getElementById("submitBtn");//select the button from html
const result = document.getElementById("result");//select the <h2>where we will show result

submitBtn.addEventListener("click", function() {//run the function when button is clicked 

    const name = document.getElementById("name").value;// gets the user's name from the input
    const lieAnswer = document.getElementById("lieAnswer").value;//gets ans to "Have you ever lied ?"

    //it is pop up msg it checks if user left any feild empty shows alert
    if(name === "" || lieAnswer === "") {
        alert("Please fill all fields!");
        return;
    }

    // Generate random truth percentage
    const truthPercent = Math.floor(Math.random() * 101);

    if(truthPercent > 70) {
        result.innerText = `${name}, you are ${truthPercent}% truthful `;
    } else if(truthPercent > 40) {
        result.innerText = `${name}, you are ${truthPercent}% suspicious `;
    } else {
        result.innerText = `${name}, you are ${truthPercent}% lying `;
    }

});