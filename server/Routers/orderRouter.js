const express = require('express')
const router = express.Router()

const {getAllOrders} = require('../controller/orderController')



router.route('/getAllOrders').post(getAllOrders)


module.exports =  router
