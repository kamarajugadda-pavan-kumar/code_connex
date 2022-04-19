const router=require('express').Router()
const Vendor=require('../schema/Vendor')

// post
router.post("/vendor",async(req,res)=>{
    const newVendor= new Vendor(req.body)
    try{
        const savedVendor=await newVendor.save()
        res.status(200).json(savedVendor)
    }catch(err){
        res.status(500).json(err)
    }
})



// delete
router.delete('/vendor/:id',async(req,res)=>{
    try{
        await Vendor.findByIdAndDelete(req.params.id)
        res.status(200).json("vendor has been deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get all
router.get("/vendor/all",async(req,res)=>{
    try{
        const vendors=await Vendor.find()
        res.status(200).json(vendors)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get
router.get("/vendor/:id",async(req,res)=>{
    try{
        const vendor=await Vendor.findById(req.params.id)
        res.status(200).json(vendor)
    }
    catch(err){
        res.status(500).json(err)
    }
})




// put
router.put("/vendor/:id",async(req,res)=>{
    try{
        const updatedVendor= await Vendor.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body,
            },
            {new :true}
        );
        res.status(200).json(updatedVendor)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports=router 