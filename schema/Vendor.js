const mongoose=require('mongoose');
const VendorSchema= new mongoose.Schema(
    {
        vendor_name:{type:String, required:true},
        email_id:{type:String,required:true},
        phone_no:{type:String,required:true},
        profile_pic:{type:String,required:true},
        status:{type:Boolean, required:true},
        company_name:{type:String,required:true},
        company_desc:{type:String,required:true},
        company_location:{type:String,required:true},
        company_img:{type:String,required:true},
        
    },
    {
        timestamps:true
    }
)
module.exports= mongoose.model("Vendor",VendorSchema)