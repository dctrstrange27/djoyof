const express = require('express')
const router = express.Router()
const {  
    getUsers,
    login,
    signup,
    getUserDetails,
    changePass,
    sendCode,
    confirmCode,
    deleteUser,
    cancelOrder,
    loadOrders,
    cancelledOrders,
    deletCancelled,
    resendCode,
    accounWithGoogle,
    createGoogleAccount,
    getGoogleUserDetails,
    getGoogleAccounts,
    loginGoogleAccount,
} = require('../controller/userController')

router.route('/login').post(login)
router.route('/getUsers').get(getUsers)
router.route('/signup').post(signup)
router.route('/getUserDetails').post(getUserDetails)
router.route('/deleteUser/:id').post(deleteUser)
router.route('/changePass').post(changePass)
router.route('/sendCode').post(sendCode)
router.route('/confirmCode').post(confirmCode)
router.route('/cancelOrder/:id').post(cancelOrder)
router.route('/loadOrders').post(loadOrders)
router.route('/cancelled').post(cancelledOrders)
router.route('/deleteCancelled/:id').post(deletCancelled)
router.route('/resendCode').post(resendCode)
router.route('/createGoogleAccount').post(createGoogleAccount)
router.route('/getGoogleUserDetails').post(getGoogleUserDetails)
router.route('/getGoogleAccounts').get(getGoogleAccounts)
router.route('/loginGoogleAccount').post(loginGoogleAccount)
module.exports =  router
