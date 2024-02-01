const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});

const validId=mongoose.model("roles",userSchema);
module.exports=validId;