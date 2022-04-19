const router=require('express').Router()
const Order=require('../schema/Order')

// post
router.post("/order",async(req,res)=>{
    const newOrder= new Order(req.body)
    try{
        const savedOrder=await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})



// delete
router.delete('/order/:id',async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("order has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get all
router.get("/order/all",async(req,res)=>{
    try{
        const orders=await Order.find()
        res.status(200).json(orders)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get
router.get("/order/:id",async(req,res)=>{
    try{
        const order=await Order.findById(req.params.id)
        res.status(200).json(order)
    }
    catch(err){
        res.status(500).json(err)
    }
})




// put
router.put("/order/:id",async(req,res)=>{
    try{
        const updatedOrder= await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new :true}
        );
        res.status(200).json(updatedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router 