const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const userSchema=mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true},
    address:{type:String, required:true}
})
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
userSchema.methods.validPassword = password => {
    return bcrypt.compareSync(password, this.local.password);
  };
module.exports=mongoose.model('loginPractice',userSchema)