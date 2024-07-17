import express from 'express'
import fs from 'fs'

let router = express.Router()


router.post("/create", async (req, resp) => {
  let emp_data = req.body
  console.log(emp_data);
  let emp = await hi()
  let flag = emp.find((abc) => {
    return abc.id === emp_data.id
  })

  if (flag) {
    return resp.json({ "err": " user already exist" })
  }
  emp.push(emp_data)
  await saveEmployees(emp)
  return resp.status(200).json({ "msg": "new employeee created" })
})

router.get("/read",async (req,resp)=>{
  let emp=await hi()
   resp.status(200).json(emp)
})

let saveEmployees=((emp)=>{
  fs.writeFileSync('data.json',JSON.stringify(emp))
})



let hi = () => {
  let employees = fs.readFileSync('data.json', 'utf-8')
  return JSON.parse(employees)
}
export default router