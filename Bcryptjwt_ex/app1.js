 import bcrypt from  'bcrypt'

 let user={
    name:"Rahul",
    id:"101",
    cc:"1234789654254671",
    password:"mng"
 }

 let one=bcrypt.genSaltSync(10)
 let new_name=bcrypt.hashSync(user.name,one)
 console.log(new_name);
 
 let name=bcrypt.compareSync("Rahul",user.name)
 console.log(name);