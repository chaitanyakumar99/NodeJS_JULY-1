const http=require('http')

let server =http.createServer((req,resp)=>{
    resp.end("<h1>Hi, Hello....!</h1>")
})

server.listen(1111,(err)=>{
    if(err) throw err
    console.log("Server is Running")
})