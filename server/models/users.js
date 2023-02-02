const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const userSchema = mongoose.Schema({
  email_address: { type: String, required: true, unique : true },
  customer_address: { type: String, default:"" },
  customer_name: { type: String, default: "" },
  contact_no: { type: String, default:"" },
  password: { type: String, default: "" },
  verified: {type: Boolean, default: "" },
  profile_picture : { type: String, default : 'https://cdn.discordapp.com/attachments/955281529481883729/960149662831087626/morty.png'},
  cartItems: {type: [], default: []},
  orders : {type : [], default : []},
  favorites : {type : [], default : []},
  to_receive_order : {type : [], default : []},
  completed_order : {type : [], default : []},
  cancel_order : {type : [], default : []},
  // objectId's of products
});

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


module.exports = mongoose.model("users", userSchema);

