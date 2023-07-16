// const Product = require("../classic-furn-be/index.js");
// const express = require("express");
// const  router  = express.Router()

// router.get("/product", async (req, res) => {
//     try {
//         const product = await Product.find({});
//         res.status(200).json(product);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// router.get("/product/:id",async(req,res)=>{
//     try{
//      const {id}= req.params;
//      const product= await Product.findById(id)
//      res.status(200).json(product)
//     }catch(err){
//     res.status(500).json({message:err.message})
//     }
// })  


// module.exports  = router