const express = require("express");
const app = express();
exports.app = app;
const mongoose = require('mongoose');
const Product  = require("./Product.js");
const Customer  = require("./customer.js");
const User = require("./usernameSchema.js")
const bcrypt = require("bcrypt")

const cors = require("cors")


require("dotenv").config()
app.use(cors())

app.use(express.json())
// app.use("/api",productRoute)
app.use('/auth',require("../classic-furn-be/user.route.js"))

const PORT = process.env.PORT;
app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
  });


app.get("/product", async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.get("/customer", async (req, res) => {
    try {
        const customer = await Customer.find({});
        res.status(200).json(customer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});





app.get("/product/:id",async(req,res)=>{
    try{
     const {id}= req.params;
     const product= await Product.findById(id)
     res.status(200).json(product)
    }catch(err){
    res.status(500).json({message:err.message})
    }
})  





app.post("/product",async(req,res)=>{
    try{
      const product = await Product.create(req.body)
      res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
        console.log(error.message);
    }
})

app.post("/customer",async(req,res)=>{
    try{
      const customer = await Customer.create(req.body)
      res.status(200).json(customer)
    }catch(error){
        res.status(500).json({message:error.message})
        console.log(error.message);
    }
})


app.put("/product/:id",async(req,res) =>{
    try{
     const {id} =req.params
     const product = await Product.findByIdAndUpdate(id,req.body)
     if(!product){
        return res.status(200).json({message:`cannot find ${id}`})
     }
     res.status(200).json(product)
    }catch(err){
     res.status(500).json({message:"Error catched"})
    }
})

app.delete("/product/:id",async(req,res)=>{
    try{
        const {id}= req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:product})
        } res.status(200).json("Succesfully deleted")
    }catch(err){
        res.status(500).json({message:err.message})
    }
})




mongoose.
connect(process.env.MONGO_URL)
.then(() => console.log('Connected to database'))
.catch((err) =>console.log("Error on database"))


app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
