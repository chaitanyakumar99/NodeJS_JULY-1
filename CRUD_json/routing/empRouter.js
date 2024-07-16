import express, { json } from 'express'
import fs from 'fs'

let router=express.Router()

router.post("/create",(req,resp)=>{

})

router.get("/read",async(req,resp)=>{
    let test= await getEmployees()
    resp.status(200).json(test)
    

})


let saveEmployees=(test)=>{}

let getEmployees=()=>{
   let emp=fs.readFileSync('data.json','utf-8')
   return JSON.parse(emp)
}


export default router 