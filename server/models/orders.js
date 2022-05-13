const mongoose = require('mongoose')
  
const orderSchema=mongoose.Schema({
  customer_id:{type:String, required:true},
  customer_name:{type:String, required:true},
  customer_address:{type:String,required:true},
  contact_no:{type:Number, required:true},
  items : [],
    //   product_id:{type:ObjectId, required:true},
    //   product_name:{type:String, require:true},
    //   product_qty:{type:Number, default:1},
    //   product_price:{type:Number, default:0},
  total:{type:Number, required:true},
  orderStatus:{type:Number, default: 0}, // POSSIBLE VALUES CAN BE 👉: -1 -> Cancelled, 0 -> To Receive, 1 -> Completed
  transactionType : { type:String, default : "COD" }, // POSSIBLE VALUES : GCash, COD
  date_ordered:{type:Date, default:Date.now},
  date_cancelled:{type:Date, default: null},
  date_dilivered:{type:Date, default: null}
})

module.exports=mongoose.model('Order',orderSchema)