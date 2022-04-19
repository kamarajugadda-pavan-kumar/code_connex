const router=require('express').Router()
const Product=require('../schema/Product')

// post
router.post("/product",async(req,res)=>{
    const newProduct= new Product(req.body)
    try{
        const savedProduct=await newProduct.save()
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})



// delete
router.delete('/product/:id',async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("product has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get all
router.get("/product/all",async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get
router.get("/product/:id",async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch(err){
        res.status(500).json(err)
    }
})




// put
router.put("/product/:id",async(req,res)=>{
    try{
        const updatedProduct= await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new :true}
        );
        res.status(200).json(updatedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router 