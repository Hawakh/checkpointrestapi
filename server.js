const express=require('express')
const app=express()
const morgan=require('morgan')
const bodyParser=require('body-parser')
//connecion DB
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/rsetapi',{ useNewUrlParser: true, useUnifiedTopology: true })
const db=mongoose.connection
db.on('error',(err)=>console.log(err))
db.once('open',()=>{console.log("database connection established!")})
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//connection serveur
const PORT=process.env.Port || 4000
app.listen(PORT,()=>
{console.log(`server is running on port ${PORT}`)})
//connection router
app.use("/api/users",require("./routes/user"))