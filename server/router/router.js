const express = require('express')
const app = express.Router()
const userModel = require('../schema/userSchema')

app.post('/signup',async(req,res)=>{
    let result = new userModel(req.body)
    result = await result.save()
    res.send(result)
})
app.post('/login',async(req,res)=>{
    let result = await userModel.findOne(req.body)
   res.send(result)
    console.log(result);

  
})

module.exports = app;