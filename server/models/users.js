const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const userSchema = mongoose.Schema({
  email_address: { type: String, required: true },
  customer_address: { type: String, required: true },
  customer_name: { type: String, required: true },
  contact_no: { type: Number, required: true },
  password: { type: String, required: true },
  cartItems: {type: [{}], default: []},
  orders : {type : [], default : []}
});

module.exports = mongoose.model("users", userSchema);