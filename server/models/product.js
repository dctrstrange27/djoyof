const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const productSchema=mongoose.Schema({
    product_name:{type:String, required:true},
    product_price:{type:Number, required:true},
    image:{type: String},
    description:{type: String}
})
module.exports=mongoose.model('product',productSchema)