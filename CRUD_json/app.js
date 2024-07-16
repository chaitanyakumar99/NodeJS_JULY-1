import fs from 'fs'
import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'

import empRouter from './routing/empRouter.js'
import { hostname } from 'os'

let app=express()

dotenv.config({path:'./config/dev.config'})

let port=process.env.port
let host=process.env.hostname

app.get('/',(req,resp)=>{
    resp.send('severe is running properlly')
})
app.use('/user',empRouter)



app.listen(port,host,(err)=>{
    console.log(chalk.bgGrey(`sucessfully http://${host}:${port}/`));
})