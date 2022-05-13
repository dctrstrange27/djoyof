const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Product = require("../models/products");
const bcrypt = require("bcrypt-nodejs");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const users = require("../models/users");
let ObjectId = require("mongoose").Types.ObjectId;


//global variable
let Vcode = " ";
let email = " ";
//--------------

const ehandler = (e, res) => {
  console.log(e);
  return res
    .status(500)
    .json({
      description: "Sorry but theres an error in the server. try again later",
      err: e,
    });
};

router.get("/", (req, res) => {
  res.send("From API router");
});

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function SendConfirmOrders(userEmail,items,price,totalprice,userName,DateNow,DateArrived,qty){
  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bakingdjoyof@gmail.com",
      pass: "Siaa69mobztaz",
    },
  });
  var mailOptions = {
    from: "bakingdjoyof@gmail.com",
    to: userEmail,
    subject: "DJOYOFBAKING",
    text:"Hello "+ userName +"\n"+"Thank you for your order and  is estimated to arrive around "+DateNow +" - "+ DateArrived
    +"\nItems \n"+items +"Quantity " +qty+ "price "+price +"totalprice "+totalprice,
    /*
      Hello CustomerName
        Thank you for your order and is estimated to arrive around (1 - 3 days bago ma receive yung order) 
        Items         Quantity       Price
        Item1           1              30
        Item2           1              39

        Total Price: 69
    */
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      email = `${email_address}`;
      console.log("Email sent: " + info.response);
    }
  });
  return res.status(401).json({ message: "order Success" });
}

function SendCancelOrder(userEmail,items,userName,DateNow){
  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bakingdjoyof@gmail.com",
      pass: "Siaa69mobztaz",
    },
  });
  var mailOptions = {
    from: "bakingdjoyof@gmail.com",
    to: userEmail,
    subject: "DJOYOFBAKING",
    text:"Hello "+ userName +"\n"+"Your Order has been cancelled shown below "+DateNow 
    +"\n"+items
    /*
      Hello CustomerName
        Hello CustomerName Your Order has been cancelled shown below. Date Canccelled Date.now()
        Item1
        item2
        Item3
    */
  };
  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      email = `${email_address}`;
      console.log("Email sent: " + info.response);
    }
  });
  return res.status(401).json({ message: "order Success" });
}

router.post("/login", async (req, res) => {
  try {
    const { email_address, password } = req.body;
    if (!(email_address, password))
      return res
        .status(403)
        .json({
          description:
            "Please provide all information required, email & password",
        });

    const doesExist = await User.findOne({ email_address });

    if (!doesExist)
      return res
        .status(404)
        .json({ description: "Sorry but this user doesn't exist" });
    if (!(await bcryptjs.compare(password, doesExist.password)))
      return res.status(403).json({ description: "wrong credential" });

    return res.json({ userData: doesExist });
  } catch (e) {
    ehandler(e, res);
  }
});

router.post("/signup", async (req, res) => {
  const {
    email_address,
    customer_name,
    password,
    confirm_password,
    address,
    contact_no,
  } = req.body;
  User.findOne({ email_address: `${email_address}` }, function (err, user) {
    if (err) {
      return res.status(200).json({ message: err });
    }
    if (user) {
      return res
        .status(403)
        .json({ description: "the user is already taken", theUser: user });
    } else {
      if(`${password}`==`${confirm_password}`){
        var newUser = new User();
        newUser.email_address = `${email_address}`;
        newUser.password = newUser.generateHash(`${password}`);
        newUser.save(function (err) {
          User.create({
            customer_name: `${customer_name}`,
            email_address: `${email_address}`,
            password: newUser.password,
            customer_address: `${address}`,
            contact_no: `${contact_no}`
          });
          return res.status(200).json({ message: newUser });
        });
    }else{
      return res.status(403).json({ description: "password did not match" });
    }
  }
  });
});

router.post("/sendCode", async (req, res) => {
  const { email_address } = req.body;
  fd = between(0, 10).toString();
  sd = between(0, 10).toString();
  td = between(0, 10).toString();
  pd = between(0, 10).toString();
  Vcode = `${fd}${sd}${td}${pd}`;
  User.findOne({ email_address: `${email_address}` }, function (err, user) {
    if (err) {
      return res.status(200).json({ message: err });
    }
    if (!user) {
      return res.status(200).json({ message: "No User Found" });
    }
    var mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bakingdjoyof@gmail.com",
        pass: "Siaa69mobztaz",
      },
    });
    var mailOptions = {
      from: "bakingdjoyof@gmail.com",
      to: `${email_address}`,
      subject: "Reset password",
      text: Vcode,
    };
    mail.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        email = `${email_address}`;
        console.log("Email sent: " + info.response);
      }
    });
    return res.status(401).json({ message: Vcode });
  });
});

router.post("/changePassword", async (req, res) => {
  const { newpassword, userCode, confirmpassword } = req.body;
  if (Vcode.length == 0) {
    return res.status(201).json({ message: "Null" });
  }
  if (Vcode == `${userCode}`) {
    if (`${newpassword}` == `${confirmpassword}`) {
      const filter = { email_address: email };
      const update = { password: `${newpassword}` };
      await User.updateOne(filter, { password: User.generateHash(`${newpassword}`) });
      return res.status(201).json({ message: "Password changed", user: email });
    }
  }
  return res.status(201).json({ message: "not matched", code: Vcode });
});

//Crud for admin
router.post("/newProduct", async (req, res) => {
  const { product_name, product_price, image, description } = req.body;
  Product.findOne({ product_name: `${product_name}` }, function (err, user) {
    if (err) {
      return res.status(200).json({ message: err });
    }
    if (user) {
      return res.status(200).json({ message: "the product is already exist" });
    } else {
      var newProduct = new Product();
      newProduct.save(function (err) {
        Product.create({
          product_name: `${product_name}`,
          product_price: `${product_price}`,
          image: `${image}`,
          description: `${description}`,
        });
        return res.status(200).json({ message: newProduct });
      });
    }
  });
});

router.post("/updateProduct", async (req, res) => {
  const { product_name, product_price, image, description } = req.body;
  Product.findOne({ product_name: `${product_name}` }, function (err, user) {
    if (err) {
      return res.status(200).json({ message: err });
    }
    if (!(user)) {
      return res.status(200).json({ message: "item not found" });
    } // nag error sa bandang part na to
  });
  const filter = { product_name: `${product_name}` };
  await Product.updateOne(filter, {
    product_price: `${product_price}`,
    image: `${image}`,
    description: `${description}`,
  });
  return res.status(200).json({ message: "Item updated" });
});

router.post("/deleteProduct", async (req, res) => {
  const { product_name, product_price, image, description } = req.body;
  Product.findOne({ product_name: `${product_name}` }, function (err, user) {
    if (err) {
      return res.status(200).json({ message: err });
    }
    if (!user) {
      return res.status(200).json({ message: "item not found" });
    } // nag error sa bandang part na to
  });
  const filter = { product_name: `${product_name}` };
  await Product.deleteOne(filter, {
    product_name: `${product_name}`,
    product_price: `${product_price}`,
    image: `${image}`,
    description: `${description}`,
  });
  return res.status(200).json({ message: "1 documnent deleted" });
});

//for browsing
router.get("/getAllProducts", async (req, res) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      products,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "The server has an error" });
  }
});

// don't use this. just for postman
router.post("/createUsrPostman", async(req,res) => {
    const hashed = await bcryptjs.hash(req.body.password, 10)
    const userData = await User.create({...req.body, password : hashed})
    res.status(201).json({ message : "User Created 👌", userData })
})

// user actions
router.post("/getUserDetails", async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id)
      return res
        .status(401)
        .json({ description: "Missing payload, please probide user id" });
    const userData = await User.findOne({ _id });
    return res.status(200).json({ userData });
  } catch (e) {
    ehandler(e, res);
  }
});

router.post("/updateMyFavorites", async (req, res) => {
  try {
    // 0 - Add
    // -1 - Remove
    // 1 - Get all favorites
    const { favorites, mode, product_id, _id } = req.body;

    if (mode === 0) {
      const updateUser = await User.updateOne({ _id : new ObjectId(_id) },{ $push : { favorites : new ObjectId(product_id) } })
      const updateProduct = await Product.updateOne({ _id : product_id }, { $inc : { total_likes : 1 } })
      return res.status(200).json({ message : "Added 👌" })
    } else if (mode === 1) {
      if(favorites.length <= 0) return res.status(400).json({ description : "You have 0 favorites"})
      let prodIds = favorites.map((i) => { return new ObjectId(i) } )
      const favs = await Product.find({ _id: { $in: prodIds } });
      return res.status(200).json({ favourites : favs, });
    } else if (mode === -1) {
        const updateUser = await User.updateOne({_id}, { $pull : { favorites : new ObjectId(product_id) }})
        const updateProduct = await Product.updateOne({ _id : product_id }, { $inc : { total_likes : -1 } })
        return res.status(200).json({ message : "Removed 👌" })
    }

    res.status(400).json({
        description : "No mode provided, 1 add, -1 remove, 1 get all",
      });
  } catch (e) {
    ehandler(e, res);
  }
});

router.post("/updateCart", async (req, res) => {
  try {
    const { _id, cartItems } = req.body;

    if (!(_id, cartItems))
      return res.status(401).json({ description: "Missing payloads" });

    const update = await User.updateOne(
      { _id },
      {
        $set: {
          cartItems,
        },
      }
    );

    res.status(200).json({ message: "update, oks👌!" });
  } catch (e) {
    ehandler(e, res);
  }
});

module.exports = router;
