const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const userSchema = mongoose.Schema({
  email_address: { type: String, required: true, unique : true },
  customer_address: { type: String, required: true },
  customer_name: { type: String, required: true },
  contact_no: { type: Number, required: true },
  password: { type: String, required: true },
  profile_picture : { type: String, default : 'https://cdn.discordapp.com/attachments/955281529481883729/960149662831087626/morty.png'},
  cartItems: {type: [{}], default: []},
  orders : {type : [], default : []},
  favorites : {type : [], default : []} // objectId's of products
});
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
module.exports = mongoose.model("users", userSchema);