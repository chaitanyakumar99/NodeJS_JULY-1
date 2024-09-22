import express from 'express'
import fs from 'fs'
let router =express.Router();

// Usage : create new employee/user/product/order
// API URL: http://127.0.0.1:8080/api/create
// Method Type: POST
// Required Fields: eid,ename,esal,loc
// Access Type:Public
// Note: we need to verify employee exist or not. 
// If employee not exit we are going to create new employee

router.post("/create",(req,resp)=>{
    let emp =req.body;
});


// Usage : fetch all employees/users/products/orders
// API URL: http://127.0.0.1:8080/api/read
// Method Type: GET
// Required Fields: None
// Access Type:Public

router.get("/read",async(req,resp)=>{
    let employees= await getEmployees()
    return resp.json(employees)
})


let getEmployees=()=>{
    let emp_Data=fs.readFileSync('data.json','utf-8')
    return JSON.parse(emp_Data)
}

export default router;