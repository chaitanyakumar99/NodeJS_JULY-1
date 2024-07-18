import express from 'express'
import fs from 'fs'
 

let router=express.Router()

router.get('/read',(req,resp)=>{
    
})



let emp=()=>{

 let employee=fs.readFileSync('emp.json','utf-8') 
 return JSON.parse(employee)

}

export default router