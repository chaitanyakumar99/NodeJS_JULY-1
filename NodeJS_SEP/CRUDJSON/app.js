import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

let app=express()


dotenv.config({path:'./confog/product.config'})

app.use(morgan('tiny'))

let port=process.env.port
let host=process.env.host

app.get("/",(req,resp)=>{
    resp.json("Root req")
})


