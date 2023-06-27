const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express() 
app.use(cors())
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())

app.use(require('./router/router'))
const PORT = process.env.PORT || 8080;

app.get('/signUp',async(req,res)=>{
    let result = await result
})
app.listen(PORT,()=>{
    console.log(`server is starting on localhost:${PORT}`);
})