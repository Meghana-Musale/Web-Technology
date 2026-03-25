const express=require('express')
const app=express()
const port=3006

const users=[
        {
            id:1,
            name:"ABC",
            email:"abc@gmail.com"
        },
        {
            id:2,
            name:"XYZ",
            email:"xyz@gmail.com"
        },
        {
            id:3,
            name:"PQR",
            email:"pqr@gmail.com"
        },
        {
            id:4,
            name:"LMN",
            email:"lmn@gmail.com"
        }


    ]

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);

    const user=users.find(u=>u.id===userId);
    if(!user){
        return res.status(404).json({error:"User not found"});
    }
    res.json(user);
}); 

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})