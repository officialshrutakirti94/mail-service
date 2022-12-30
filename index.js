require('./models/db')
const express=require('express')
const mongoose=require('mongoose')
const user=mongoose.model('userDetails')
const collection=require("mongodb")
const bodyParser= require('body-parser')
const app=express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register',async (req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    }
    await collection.insertMany([data])
    res.redirect("home")
})

app.use(express.static('public'))
app.listen(3000,(req,res)=>{
    console.log('Server is running')
})