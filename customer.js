const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Enter a Customer name"]
        },
        poster: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        }
        
    })

const Customer = mongoose.model("Customer", productSchema);

module.exports= Customer;