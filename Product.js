const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter a Product name"]
        },
        rate: {
            type: Number,
            required: true,
            default: 0
        },
        poster: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        },
        material: {
            type: String,
            required: true
        },
        
    })

const Product = mongoose.model("Product", productSchema);

module.exports= Product;