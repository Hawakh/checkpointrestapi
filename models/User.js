const mongoose=require('mongoose')
const schema=mongoose.Schema

 const UserSchema =new schema({
    name:{
        type:String
    },
   
    Surname:{
        type:String
    },
    email:{
        type:String
    },
    adress:{
        type:String
    },
    phone:{
        type:Number
    }

},{timestamps:true})
const User=mongoose.model('User',UserSchema)

module.exports=User