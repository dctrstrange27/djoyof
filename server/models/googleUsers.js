const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email_address: { type: String, required: true, unique : true },
  customer_name: { type: String, required: true },
  profile_picture : { type: String, required: true},
  verified: {type: Boolean, required: true, },
  cartItems: {type: [], default: []},
  orders : {type : [], default : []},
  favorites : {type : [], default : []},
  to_receive_order : {type : [], default : []},
  completed_order : {type : [], default : []},
  cancel_order : {type : [], default : []},
  // objectId's of products
});

module.exports = mongoose.model("googleUsers", userSchema);

