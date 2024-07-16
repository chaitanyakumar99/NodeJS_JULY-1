import express from 'express'
import dotenv from 'dotenv'
import router from './routing/router.js'

let app=express()
app.use(express.json());

dotenv.config({path:"./config/dev.env"})

let port=process.env.port
let host=process.env.hostname

app.get("/",(req,resp)=>{
    resp.send("server running")
})

app.use("/emp",router)
app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server Running http://${host}:${port}/`);
})