import express from 'express'
import fs from 'fs'
import { Router } from 'express'

let router=express.Router()

/*
usage:create 
Api url:
Method type:POST
Required Field:eid,ename,esal,eloc
Acess type:public             
*/

router.post("/create",(Req,resp)=>{
    let emp =req.body
})

router.post("/create",(re,resp)=>{})
router.get("/read",(re,resp)=>{})
router.put("/update:id",(re,resp)=>{})
router.delete("/delete:id",(re,resp)=>{})


let getEmployees=()=>{
    
}
export default Router