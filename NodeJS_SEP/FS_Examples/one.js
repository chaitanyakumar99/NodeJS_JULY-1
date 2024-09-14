import fs from 'fs'

// let encode =fs.readFileSync('abc.txt','utf-8')
// console.log(encode)

fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})
