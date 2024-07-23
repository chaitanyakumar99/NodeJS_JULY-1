import express from "express";
import EmployeeModel from '../models/employee.js'
let router = express.Router();

//URL:localhost:8080/emp/
//Method:GET

router.get("/", (req, resp) => {

    resp.status(200).json({ "msg": "Employee Root Request" })
})

//URL:localhost:8080/emp/read
//GET:GET

router.get("/read", async (req, resp) => {
    try {
        let employees = await EmployeeModel.find();
        return resp.status(200).json(employees);
    }
    catch (err) {
        return resp.status(401).json({ "msg": err.message })
    }

})


//update
//Method type:_PUT

router.put("/update/:id",async(req,resp)=>{
    try{
            let emp_Id = req.params.id;
            console.log(emp_Id)
            let emp=req.body;
            console.log(emp)
            let Emplooye=await EmployeeModel.findOne({"eid":emp_Id})
            console.log(Emplooye)
            if(!Emplooye){
                    return resp.status(401).json({"msg":"Employee Not Exits"})
            }
            await EmployeeModel.findByIdAndUpdate(Emplooye._id,{$set:{ename:emp.ename,esal:emp.esal}});
            return resp.status(200).json({"msg":"Employee Updated Successfully"})
    }
    catch(err){
        return resp.status(401).json({"err":err.message})
    }
})

//delete


router.delete("/delete/:id",async(req,resp)=>{
    try{
      let emp_Id = req.params.id;
      console.log(emp_Id)
      let Employee  =await EmployeeModel.findOne({eid:emp_Id})
      console.log(Employee)
      if(!Employee){
        return resp.status(401).json({"msg":"Employee Not Exits"})
      }
      await EmployeeModel.findByIdAndDelete(Employee._id);
      return resp.status(200).json({"msg":"Employee document deleted"})
    }
    catch(err){
        return resp.status(401).json({"err":err.message})
    }
})

export default router;