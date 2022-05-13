const express = require("express");
const router = express.Router();
const User = require("../models/users");
const Product = require("../models/products");
const bcrypt = require("bcrypt-nodejs");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const users = require("../models/users");
const Orders = require("../models/orders")
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

function SendConfirmOrders(userEmail, orderId, items, totalprice, userName, DateNow, DateArrived) {
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
        subject: "Order Placed Successfuly",
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body style="background-color: rgb(248, 248, 248);">
            <center>
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                width="100%"
                style="
                  width: calc(600px);
                  border-radius: 1%;
                  border-collapse: collapse;
                  margin: 0 auto;
                  background-color: white;
                  padding: 0;
                "
              >
                <tbody>
                  <tr style="border-collapse: collapse; margin: 0; padding: 0">
                    <td
                      width="100%"
                      style="border-collapse: collapse; margin: 0; padding: 0"
                    >
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="
                          min-width: 100%;
                          border-collapse: collapse;
                          margin: 0;
                          padding: 0;
                        "
                      >
                        <tbody>
                          <tr style="border-collapse: collapse; margin: 0; padding: 0">
                            <td
                              height="64"
                              style="border-collapse: collapse; margin: 0; padding: 0"
                            >
                              &nbsp;
                            </td>
                          </tr>
                          <tr
                            style="border-collapse: collapse; margin: 0; padding: 0"
                            align="center"
                          >
                            <td
                              style="border-collapse: collapse; margin: 0; padding: 0"
                            >
                              
                            </td>
                          </tr>
                          <tr style="font-family: helvetica, sans-serif;
                          font-weight: 100;
                          text-decoration: none;
                          color: #333333;
                          font-size: 24px;
                          border-collapse: collapse; margin: 0; padding: 0">
                            <td
                              width="100%"
                              style="
                                min-width: 100%;
                                border-collapse: collapse;
                                margin: 0;
                                padding: 0;
                              "
                            >
                              <center>
                                <div style="margin: 20px 8px 30px 8px">
                                    <p style="font-weight: 100;">Hello ${userName}</p>
                                    <p style="font-size: 11px; ">Thank you for your order and is estimated to arrive around ${DateNow.toLocaleString()} - ${DateArrived.toLocaleString()}</p>
                                    <p style="font-size: 16px; ">Your order ID</p>
                                    <h6 style="letter-spacing: 4px; font-weight: bold; padding: 5px 25px ; ">
                                        ${orderId}
                                    </h6>
                                </div>
                              </center>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </body>
        </html>
        `
        /* 
        text: "Hello " + userName + "\n" + "Thank you for your order and  is estimated to arrive around " + DateNow + " - " + DateArrived
            + "\nItems \n" + items + "Quantity " + qty + "price " + price + "totalprice " + totalprice,
          
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
}

function SendCancelOrder(userEmail, items, userName, DateNow) {
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
        text: "Hello " + userName + "\n" + "Your Order has been cancelled shown below " + DateNow
            + "\n" + items
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

router.post("/placeOrder", async (req, res) => {
    try {
        const { orders, email_address } = req.body
        /** THIS WILL BE THE STRUCTURE OF orders passed via http post request **
            customer_name,
            customer_address,
            contact_no,
            items : [ THIS COMES FROM USER DATA cartItems
                { 
                    _id: 
                    product_name:
                    product_pric:
                    image: 
                    description:
                    total_likes:
                    product_qty:
                }
            ],
            total
        */
        if (!orders) return res.status(400).json({ message: "No orders specified" })
        const customer_id = new ObjectId(orders.customer_id)
        const placedOrder = await Orders.create({ ...orders, customer_id })

        // add the order id to user information & delete all cart items
        const updateCustomer = await users.updateOne({
            _id: new ObjectId(orders.customer_id)
        }, {
            $push : { orders: new ObjectId(placedOrder._id) }, 
            $set : { cartItems: [] }
        })

        SendConfirmOrders(email_address, placedOrder._id, orders.items, orders.total, orders.customer_name, new Date(), new Date() + 3)
        res.status(200).json({ message: "Order Placed 👌" })
    } catch (e) {
        ehandler(e)
    }
})

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
            if (`${password}` === `${confirm_password}`) {
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
            } else {
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
    });
})

router.post("/changePassword", async (req, res) => {
    const { newpassword, userCode, confirmpassword } = req.body;
    if (Vcode.length === 0) {
        return res.status(201).json({ message: "Null" });
    }
    if (Vcode === `${userCode}`) {
        if (`${newpassword}` === `${confirmpassword}`) {
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
router.post("/createUsrPostman", async (req, res) => {
    const hashed = await bcryptjs.hash(req.body.password, 10)
    const userData = await User.create({ ...req.body, password: hashed })
    res.status(201).json({ message: "User Created 👌", userData })
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
            const updateUser = await User.updateOne({ _id: new ObjectId(_id) }, { $push: { favorites: new ObjectId(product_id) } })
            const updateProduct = await Product.updateOne({ _id: product_id }, { $inc: { total_likes: 1 } })
            return res.status(200).json({ message: "Added 👌" })
        } else if (mode === 1) {
            if (favorites.length <= 0) return res.status(400).json({ description: "You have 0 favorites" })
            let prodIds = favorites.map((i) => { return new ObjectId(i) })
            const favs = await Product.find({ _id: { $in: prodIds } });
            return res.status(200).json({ favourites: favs, });
        } else if (mode === -1) {
            const updateUser = await User.updateOne({ _id }, { $pull: { favorites: new ObjectId(product_id) } })
            const updateProduct = await Product.updateOne({ _id: product_id }, { $inc: { total_likes: -1 } })
            return res.status(200).json({ message: "Removed 👌" })
        }

        res.status(400).json({
            description: "No mode provided, 1 add, -1 remove, 1 get all",
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

router.post("/getMyOrders", async(req, res) => {
    try{
        const { _id, orderStatus } = req.body
        const listOfMyOrders = await Orders.find({ customer_id : _id, orderStatus })

        res.status(200).json({
            orders : listOfMyOrders
        })
    }catch(e){
        ehandler(e)
    }
})

router.post("/updateOrder", async(req,res)=>{
    try{
        const { _id, orderStatus  } = req.body
        const updateOrderStatus = await Orders.updateOne( { _id }, { $set : {orderStatus} })
    
        if( orderStatus === 0 ){ // ORDER AGAIN
            // call mo dito SendConfirmOrders
        }else if( orderStatus === -1 ){ // CANCEL AN ORDER
            // call mo dito yung SendCancelOrder
        }

        res.status(200).json({
            message : "Successfuly update order status"
        })
    }catch(e){
        ehandler(e)
    }
})

module.exports = router;
