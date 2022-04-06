const mongoose = require('mongoose')
const productSchema=mongoose.Schema({
    product_name : { type:String, required:true },
    product_price : { type:Number, required:true },
    image: { type: String },
    description:{ type: String },
    total_likes  :{ type : Number, default : 0}
})
module.exports=mongoose.model('product',productSchema)