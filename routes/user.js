const express=require("express")
const router=express.Router()
const User=require("../models/User")


//test
/*
router.get("/",(req,res)=>{
    res.send("test")
})*/

router.post("/add",async(req,res)=>{
const {name,Surname,email,adress,phone}=req.body;
try{
const newuser=new User({
    name,
    Surname,
    email,
    adress,
    phone,

})
console.log(newuser,"testttt")
const user=await newuser.save()
res.send({msg:"User added",user})
}
catch(error){
    console.log(error)
}

})

//get all Users
router.get("/",async(req,res)=>{
    try{
        const Users=await User.find();
        res.send({msg:"data fetched",Users})
    }
    catch(error){
        console.log(error)
    }
})

//DElete
router.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try{
        const user=await User.findOneAndDelete({_id:id})
        res.send({msg:"User deleted",user})
    }
    catch(error){
        console.log(error)
    }

})

//edit 
router.put("/edit/:_id",async(req,res)=>{
    const {_id}=req.params
    try{
        const user=await User.findByIdAndUpdate({_id},{$set:req.body})
   res.send({msg:"User edited",user})
    }
    catch(error){
        console.log(error)

    }
})



module.exports=router