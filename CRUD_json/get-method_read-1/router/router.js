import fs from 'fs'
import express from 'express'

let router=express.Router()


router.get('/read',(req,resp)=>{
    let hi=emp_get()
    resp.status(200).json(hi)
})


let emp_get=()=>{
    let employees=fs.readFileSync('emp.json','utf-8')
    return JSON.parse(employees)
}


export default router