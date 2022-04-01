const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const userSchema=mongoose.Schema({
  emailaddress:{type:String, required:true},
  password:{type:String, required:true},
  customer_address:{type:String, required:true},
  customer_name:{type:String,required:true},
  contact_no:{type:Number, required:true},
  cartItems:{ type:[{
    product_name: {type: mongoose.Schema.Types.ObjectID, ref: 'Product'},
    product_qty: {type: Number, default: 1},
    product_price: {type: Number, default: 0},
    totalprice:{type:Number, default:0}
}],default:[]}
})
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
userSchema.methods.validPassword = password => {
    return bcrypt.compareSync(password, this.local.password);
  };
module.exports=mongoose.model('loginPractice',userSchema)