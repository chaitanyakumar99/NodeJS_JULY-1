const http=require('http')

const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})

let port=process.env.PORT
let host_Name=process.env.HOST_Name

let server=http.createServer((req,resp)=>{
    resp.end("Http server.....")
})

Server.listen(port,host_Name,(err)=>{
    if(err) throw err;
    console.log(`server Running on htttp://${host_Name}:${port}/`);
})