import express from 'express'
import fs from 'fs'

let router=express.Router()

app.get('/read',(req,resp)=>{

})

let get_emp=(emp)=>{

let employee=fs.readFileSync('data.json',JSON.stringify(emp))
return JSON.parse(employee)

}


export default router