const router = require('../Router/views/api')
const aHandler = require('express-async-handler')
const ehandler = require('../middleWare/errorMiddleWare')
const Product = require('../models/products')
const Orders = require("../models/orders")

const getAllProducts = aHandler(async(req,res)=>{
    try {
        const allProducts = await Product.find({});
        res.status(200).json({
            allProducts,
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "The server has an error" });
    }
})

const newProduct = aHandler(async(req,res)=>{
    const {product_name,product_price,image,description} = req.body;

    if(!req.body){
        res.status(400)
        throw new Error('please add a text field')
    }
    const productExist = await Product.findOne({product_name})

    if(productExist){
        res.status(400)
        throw new Error('product Already Exists')
    }   
    const newProduct = await Product.create({
        product_name: `${product_name}`,
        product_price: `${product_price}`,
        image: `${image}`,
        description: `${description}`,
    })
    if(newProduct){
        res.status(201).json({
            _id: Product.product_name,
            product_price: Product.product_price,
            product_image: Product.image,
            description: Product.description,
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})


//front End Get Order



// router.post("/getMyOrders", async(req, res) => {
//     try{
//         const { _id, orderStatus } = req.body
//         const listOfMyOrders = await Orders.find({ customer_id : _id, orderStatus })
//         res.status(200).json({
//             orders : listOfMyOrders
//         })
//     }catch(e){
//         ehandler(e)
//     }
// })







module.exports = {
    getAllProducts,
    newProduct,
  
}