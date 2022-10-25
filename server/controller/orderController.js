
const aHandler = require('express-async-handler')
const orders = require('../models/orders')
const { find } = require('../models/orders')
const Orders = require('../models/orders')
const User = require('../models/users')


const deleteCancelled = aHandler( async (req, res) => {
    const { _id, user_id } = req.body
    const ordersToDel = await Orders.findOne({ _id})
    const user = await User.findOne({ user_id })
    
    if (!user && !ordersToDel) {
        res.status(404)
        .json({massage:"User's and Order's ID not found!"})
    }
    if (!user) {
       res.status(404)
        .json({massage:"User's ID not found!"})
    }
    if (!ordersToDel) {
        res.status(404)
        .json({massage:"Order's ID not found!"})
    }
 
    await ordersToDel.remove()
    res.status(200).json({
        OrderDeleted: ordersToDel
    })
})


const getAllOrders = aHandler(async(req,res)=>{
    //await Orders.deleteMany()
    res.json({orders: await Orders.find({})})
})


module.exports={
    getAllOrders,
    deleteCancelled,
}