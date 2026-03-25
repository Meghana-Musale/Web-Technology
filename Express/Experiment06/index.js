// Middlware function :
// middleware is a function that runs before sending a response it can check data log info authenticate user.

const express=require('express');
const app=express();
const port=3000;

app.use((request,response,next)=>{
    console.log("Data pass",new Date());
    next(); // pass control to next function without next request will be hanging and not send response to client
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});