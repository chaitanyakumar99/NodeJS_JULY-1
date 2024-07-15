import express from 'express'

let routor=express.Router();

routor.get('/all',(req,resp)=>{

})
routor.post('/create',(err,resp)=>{

})
router.get('/update/:id',(req,resp)=>{

})
router.delete('/delete/:id',(req,resp)=>{

})


let getEmployee=()=>{
    fstat.readFile('data.json','utf-8',(err,data)=>{
        if (err) throw err
        employees=JSON.parse(data)
    })
return employees;
}
