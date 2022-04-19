const mongoose=require('mongoose');
const OrderSchema= new mongoose.Schema(
    {
        order_id:{type:String, required:true},
        transaction_no:{type:String,required:true},
        date:{type:String,required:true},
        customer_info:{type:String,required:true},
        invoice_details:{type:String, required:true},
    },
    {
        timestamps:true
    }
)
module.exports= mongoose.model("Order",OrderSchema)