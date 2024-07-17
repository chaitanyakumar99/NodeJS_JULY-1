// import express from 'express'
// import dotenv from 'dotenv'
// //import router from './router/router.js'

// let jkr=express()

// //jkr.use(express.json())

// dotenv.config({path:'./config/th.env'})

// let port=process.env.port
// let host=process.env.host
// jkr.get('/',(req,resp)=>{
//   resp.send("hi hello")
// })

// //jkr.use('/md',router)
// jkr.listen(port,host,(err)=>{
//   if(err) throw err
//   console.log(`server created http://${host}:${port}/`);
// })
import express from 'express'
import dotenv from 'dotenv'

let app=express()

dotenv.config({path:'./config/th.env'})
let port=process.env.PORT
let hostname=process.env.HOST_NAME

app.get('/',(req,resp)=>{
  resp.send("hellow goood morning")
})
app.listen(port,hostname,(err)=>{
  if(err) throw err
  console.log(`srver running http://${hostname}:${port}/`)
})

