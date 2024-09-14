import fs from 'fs'

fs.readFileSync('data.json','utf-8',(err,data)=>{
    if(err)throw err
    console.log(data)
})