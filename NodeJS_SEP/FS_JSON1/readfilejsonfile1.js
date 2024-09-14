import fs from 'fs'


fs.readFileSync('data.json','utf-8',(err,data)=>{
    if(err)throw err
    fs.writeFile('emp.json',data,(err)=>{
        console.log("new json has created")
    })
})