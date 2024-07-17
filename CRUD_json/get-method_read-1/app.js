import express from 'express'
import dotenv from 'dotenv'
import router from './router/router.js'

let raw=express()
raw.use(express.json())
raw.use('/emp',router)

dotenv.config({path:"./config/th.env"})

let port=process.env.port;
let host=process.env.host


raw.get('/',(req,resp)=>{
  resp.send("hi Welcome....!")
})


raw.listen(port,host,(err)=>{
if(err) throw err
console.log(`server created sucessfully http://${host}:${port}/`);
})