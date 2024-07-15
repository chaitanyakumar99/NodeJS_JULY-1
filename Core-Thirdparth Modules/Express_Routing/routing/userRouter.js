import express from 'express'
let router=express.Router();

router.get("/raed",(req,resp)=>{
    resp.send("User Router - Get Request")
})

router.post("/create",(req,resp)=>{
resp.send
})