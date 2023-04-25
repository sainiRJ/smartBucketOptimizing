const express = require("express");
const app=express();
require('custom-env').env(true)
const routes=require('./router/route')

const port = process.env.port
const bodyParser = require('body-parser')
app.use(bodyParser.json({extended: true,limit: '60mb'}))

const cors = require('cors')
app.use(cors());
const db =require('./config/dbConnection')
db.dbConnect()
app.use('/V1',routes)
const server =app.listen(port,()=>{
    console.log('Server start successfully',port)
})

