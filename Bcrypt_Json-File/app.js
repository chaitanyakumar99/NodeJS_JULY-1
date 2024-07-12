import bcrypt from 'bcrypt'

let users={
    email:"sai123@gmail.com",
    cc:'1234 5678 8952',
    cvv:'145',
    password:"mng"
}

let salt=bcrypt.genSaltSync(10)

let new_cc=bcrypt.hashSync(users.cc,salt)

let new_password=bcrypt.hashSync(users.password,salt)


console.log(users.cc);
console.log(new_cc);


users={...users,cc:new_cc,password:new_password}
console.log(users)



let flag = bcrypt.compareSync("mng",users.password)
if(flag){
    console.log("Login Success")
}
else{
    console.log("Login Failed")
}