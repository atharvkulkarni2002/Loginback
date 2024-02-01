const mongoose=require("mongoose");

const infoSchema=mongoose.Schema({
    Cdata:{
    floating_date:{type:String},
    floating_company:{type:String},
    floating_owner:{type:String},
    floating_item:{type:String},
    floating_quantity:{type:Number},
    floating_weight:{type:Number},
    floating_RFS:{type:String},
    floating_TID:{type:String},
    floating_Ssize:{type:String},
    floating_Bcount:{type:Number},
    floating_Specification:{type:String},
    floating_Cquantity:{type:String},
},
Role:{type:String}
}
);

const CData=mongoose.model("customerdata",infoSchema);
module.exports=CData;