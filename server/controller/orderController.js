
const aHandler = require('express-async-handler')
const Orders = require('../models/orders')
const User = require('../models/users')



// const deleteAllCancelled = aHandler( async (req, res) => {
//     const {_id} = req.body

//     const   

// })

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

const getMyOrders = aHandler( async (req, res) => {
    try {
        const { _id, orderStatus } = req.body
        const listOfMyOrders = await Orders.find({ 
            customer_id: _id,
             orderStatus 
            })
        res.status(200).json({
            orders: listOfMyOrders
        })
    } catch (e) {
        ehandler(e)
    }
})




module.exports={
    getMyOrders,
    // deleteAllCancelled,
    deleteCancelled,
    getMyOrders
}