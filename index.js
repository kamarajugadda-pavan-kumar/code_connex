const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')

// importing routes
const product=require('./routes/Product')
const order=require('./routes/Order')
const vendor=require('./routes/Vendor')


dotenv.config()

// making a mongodb connection
mongoose.connect(process.env.mogodb_connection_url)
.then(()=>{console.log('database connection successful')})
.catch((err)=>{console.log(err)})

// using middleware to use json files
app.use(express.json())
app.use(cors())


// routes
app.use('/app',product)
app.use('/app',order)
app.use('/app',vendor)


app.listen(process.env.PORT || 3000, (req,res)=>{
    console.log("app is listening")
})
