const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const user=require('./models/User')
const PORT=3000
const app=express()
mongoose.connect(process.env.MONGO_URL).then(
()=>console.log(" db connected successfully....")
).catch(
    (err)=>console.log(err)
)
app.get('/',async(req,res)=>{
    try{
        res.send("<h1 align=center>Welcome to the backend and week 2")
    }
    catch(err)
    {
        console.log(err)
    }
})

 
app.post( '/register',async(req,res)=>{
    const {user,email,password}=req.body
    try{
        const newUser=new User({user,email,password})
        await newUser.save()
        console.log("New user is registered successfully.....")
        res.json({message:'User created.....'})
    }
    catch(err)
    {
      console.log(err)
    }
})
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is running on port| This is Meena:"+PORT)
})