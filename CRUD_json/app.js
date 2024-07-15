import express from 'express'
import dotenv from 'dotenv'
import morgon from 'morgon'
import chalk from 'chalk'
import { hostname } from 'os'

let app=express()

app.use(morgon(tiny))

app.get("/",(req,resp)=>{

})

app.listen(post,hostname)