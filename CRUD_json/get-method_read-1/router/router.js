import express from 'express'
import fs from 'fs'

let router=express.Router()

router.get('/read',(req,resp)=>{
    let hi =get_emp()
   return resp.status(200).json(hi)
})


let saveemployees=(employees)=>{}
let get_emp=(()=>{
    let employess=fs.readFileSync('emp.json','utf-8')
return JSON.parse(employess)
})

export default router
