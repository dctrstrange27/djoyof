const mongoose = require('mongoose')
const orderSchema=mongoose.Schema({
  order_id:{type:String, required:true},
  customer_id:{type:String, required:true},
  customer_name:{type:String, required:true},
  customer_address:{type:String,required:true},
  contact_no:{type:Number, required:true},
  product_id:{type:Number, required:true},
  product_name:{type:String, require:true},
  product_qty:{type:Number, default:1},
  product_price:{type:Number, default:0},
  total:{type:Number, default:0},
  orderStatus:{type:Number,default:null},
  date_ordered:{type:Date, default:Date.now},
  date_cancelled:{type:Date, default: null},
  date_dilivered:{type:Date, default: null}

})

module.exports=mongoose.model('Order',orderSchema)