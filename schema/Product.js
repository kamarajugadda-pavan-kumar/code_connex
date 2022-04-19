const mongoose=require('mongoose');
const ProductSchema= new mongoose.Schema(
    {
        vendor:{type:String, required:true},
        product:{type:String,required:true},
        product_img:{type:String,required:true},
        product_description:{type:String,required:true},
        approve:{type:Boolean, required:true},

    },
    {
        timestamps:true
    }
)
module.exports= mongoose.model("Product",ProductSchema)

