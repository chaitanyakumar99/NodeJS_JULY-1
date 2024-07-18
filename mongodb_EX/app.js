import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

let app=express()
dotenv.config({path:"./config/dev.env"})

mongoose.connect((durl),{})
.then()