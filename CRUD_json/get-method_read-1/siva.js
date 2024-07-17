import express from 'express'
import dotenv from 'dotenv'

let app=express()

dotenv.config({path:'./config/dev.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME

app.get('/',(req,resp)=>{
  resp.send("hellow goood morning")
})
app.listen(port,hostname,(err)=>{
  if(err) throw err
  console.log(`srver running http://${hostname}:${port}/`)
})