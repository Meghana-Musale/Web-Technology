//Express :it is framework of 
//it helps to handle routes middleware and http request easily
//make backend developement 

//why we use express js?
//simplifies sever creation in node js  it offers powerful features like , middleware ,staticfile serving, eroor handling 

/* 
NPM : (node package manager)
    -npm is tool to install packages or libraries from the node js ecosystem
    

*/
const express = require('express')
const app = express()
const port = 3002 //localhost

app.get('/time', (req, res) => {// '/' is route parameter: (request , respond)
  const currentTime = new Date().toLocaleString();
  res.json({
    message : "Hello World..!",
    time : currentTime
  });
});


app.listen(port, () => {
  console.log(`Example app running at http://localhost:${port}`)
})

//activity
//http request : get, put, post, update, patch