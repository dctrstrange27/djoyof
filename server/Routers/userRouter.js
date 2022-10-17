const express = require('express')
const router = express.Router()
const {  getUsers,
    login,
    signup,
    getUserDetails,
    deleteUser,
    changePass,
    sendCode,} = require('../controller/userController')

router.route('/login').post(login)
router.route('/getUsers').get(getUsers)
router.route('/signup').post(signup)
router.route('/getUserDetails').post(getUserDetails)
router.route('/deleteUser').post(deleteUser)
router.route('/changePass').post(changePass)
router.route('/sendCode').post(sendCode)

module.exports =  router
