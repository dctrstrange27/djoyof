
const aHandler = require('express-async-handler')
const ehandler = require('../middleWare/errorMiddleWare')
const User = require('../models/users')
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const orders = require('../models/orders');
const googleUsers = require('../models/googleUsers')

//get all uSer
const getUsers = aHandler(async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ users })
    } catch (error) {
        ehandler(error)
    }
})
// login existing user
const login = aHandler(async (req, res) => {    

    const { email_address, password } = req.body
    if (!(email_address, password)) {
        return res.status(403).json({ error_message: "Payload Missing, Please provide all required information 💨" })
    }
    const doesExist = await User.findOne({ email_address })
    if (!doesExist) {
        return res.status(404).json({ error_message: "Opps Sorry ! User doesn't Exist 😓" })
    }
    if (doesExist && (await bcrypt.compare(password, doesExist.password))) {
        return res.status(200).json({ userData: doesExist })
    } else {
        return res.status(400).json({ error_message: "Incorrect Password! 😫" })
    }
})
const generateHash = password =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
  }
// signup user
const signup = aHandler(async (req, res) => {
    const { email_address, customer_name, password, confirm_password} = req.body;
    const doesExist = await User.findOne({ email_address })
    if (doesExist) {
        return res.status(400).json({ error_message: "User already Taken! 😫" })
    }
    if (!(email_address, customer_name, password, confirm_password)) {
        return res.status(403).json({ error_message: "Please provide all required information " })
    }
    if (!email_address) {
        return res.status(403).json({ error_message: "Missing email Address! " })
    }
    if (!customer_name) {
        return res.status(403).json({ error_message: "Missing name! " })
    }
    if (!password) {
        return res.status(403).json({ error_message: "Missing password! " })
    }
    const hashPassword = await bcrypt.hash(password, (await bcrypt.genSalt(10)))
    if (password === confirm_password) {
        const newUser = await User.create({
            email_address: email_address,
            customer_name: customer_name,
            password: hashPassword,
            confirm_password: confirm_password,
        })
        if (newUser) {
            return res.status(201)
                .json({ userData: newUser })
        } else {
            return res.status(400).json({ error_message: "Invalid Data! " })
        }
    } else {
        return res.status(400).json({ error_message: "Password didn't match!!!  " })
    }
})
//delete users
const deleteUser = aHandler(async (req, res) => {
    if (!req.params.id) res.status(400).json({ error: "Missing Payloads!" })
    const userToDel = await User.findById(req.params.id)
    if (!userToDel) res.status(404).json({ message: "User not Found!" })
    await userToDel.remove()
    res.status(200).json({ deteted: userToDel.email_address })
})
// const getme = aHandler(async (req, res) => {
//     const getmeId = req.body
//     const user = await User.findOne({ getmeId })
//     if (user) {
//         return res
//             .status(200)
//             .json({ theUser, user })
//     }
// })
//getting user data
const getUserDetails = aHandler(async (req, res) => {
    try {
        const { _id } = req.body;
        if (!_id)
            return res
                .status(401)
                .json({ error_message: "Missing payload, please provide user id" });
        const userData = await User.findOne({ _id });
        if (!userData)
            return res
                .status(401)
                .json({ error_message: "User's Id is not Existing!" });

        return res.status(200).json({ userData });
    } catch (e) {
        ehandler(e, res);
    }
})

const getGoogleUserDetails = aHandler(async (req, res) => {
    try {
        const { _id } = req.body;
        if (!_id)
            return res
                .status(401)
                .json({ description: "Missing payload, please provide user id" });
        const userData = await googleUsers.findOne({ _id });
        if (!userData)
            return res
                .status(401)
                .json({ description: "User's Id is not Existing!" });

        return res.status(200).json({ userData });
    } catch (e) {
        ehandler(e, res);
    }
})


var Vcode = ""
const confirmCode = aHandler(async (req, res) => {
    const { code } = req.body

    if (!code) res.status(400).json({ message: "Missing Payloads!" })

    if (code === Vcode) {
        res.status(200).json({ message: "Code Already Send" })
    } else {
        res.status(404).json({ message: "Invalid Code! try to resend!" })
    }
})
const changePass = aHandler(async (req, res) => {
    const { email_address, newPassword, confirmPass, } = req.body
    const doesExist = await User.findOne({ email_address })
    if (!doesExist) {
        return res.status(404).json({ message: "You can't proceed to changing password, This User's doesn't Exist!!" })
    }
    const newPass = await bcrypt.hash(newPassword, (await bcrypt.genSalt(10)))
    try {
        if (newPassword !== confirmPass) {
            return res.status(400).json({ message: "password Didn't Match" })
        }
        const filter = ({ email_address: doesExist.email_address })
        await User.updateOne(filter, { $set: { password: newPass } })
        return res.status(200).json({ message: "Password Already Change!" })
    } catch (error) {
        console.log(error)
    }
})
function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const sendCode = aHandler(async (req, res, next) => {
    const { email_address } = req.body

    fd = between(0, 10).toString();
    sd = between(0, 10).toString();
    td = between(0, 10).toString();
    pd = between(0, 10).toString();
    Vcode = `${fd}${sd}${td}${pd}`;

    if (!email_address) return res.status(400).json({ message: "Missing PayLoad!" })
    const doesExist = await User.findOne({ email_address })
    if (!doesExist) return res.status(404).json({ message: "user not found" })
    try {
        var email = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bakingdjoyof@gmail.com",
                pass: "yjaynxxkaaiamysz",
            },
        })
        var mailOptions = {
            from: "bakingdjoyof@gmail.com",
            to: `${email_address}`,
            subject: 'Reset Password',
            text: Vcode
        }
        email.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).json({ email_sent_to: Vcode })
            }
        })
    } catch (error) {
        res.status(400).json({ error })
    }
})

const resendCode = aHandler(async (req, res) => {
    fd = between(0, 10).toString();
    sd = between(0, 10).toString();
    td = between(0, 10).toString();
    pd = between(0, 10).toString();
    Vcode = `${fd}${sd}${td}${pd}`;
    const { email_address } = req.body
    try {
        var email = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bakingdjoyof@gmail.com",
                pass: "yjaynxxkaaiamysz",
            },
        })
        var mailOptions = {
            from: "bakingdjoyof@gmail.com",
            to: `${email_address}`,
            subject: 'Reset Password',
            text: Vcode
        }
        email.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                res.status(200).json({ message: "Successfully sent a Code! 👍 👍" })
            }
        })
    } catch (error) {
        res.status(400).json({ error })
    }
})

const cancelOrder = aHandler(async (req, res) => {
    const order = await orders.findById(req.params.id)
    if (!order) res.status(404).json({ message: "order's not found!" })
    await User.updateOne({}, { $push: { cancel_order: order } },)
    await User.updateOne({}, { $pull: { to_receive_order: order._id } },)

    await order.remove()
    return res.status(200).json({ message: "order cancelled!!! it save to cancelled order 👍" })
})

const loadOrders = aHandler(async (req, res) => {
    res.status(200).json({ orders: await orders.find({}) })
})

const cancelledOrders = aHandler(async (req, res) => {
    const order = await User.findOne({})
    return res.status(200).json({ cancelled: order.cancel_order })
})

const deletCancelled = aHandler(async (req, res) => {
    const id = req.params.id

    if (!id) return res.status(404).json({ message: "id not found!!" })
    try {
        await User.updateOne({ id }, { $pull: { cancel_order: id } })

        return res.status(200).json({ message: "successfully deleted an order!! 🔥🔥" })
    } catch (error) {
        console.log(error)
    }
})

const createGoogleAccount = aHandler(async (req, res) => {
    const { email_address, customer_name, picture, verified } = req.body
    const doesExist = await googleUsers.findOne({ email_address })

    if (doesExist) {
        return res.status(200).json({ userData: doesExist })
    }
    else {
        try {
            const newUser = await googleUsers.create({
                email_address: email_address,
                customer_name: customer_name,
                profile_picture: picture,
                verified: verified,
            })
            return res.status(200).json({ userData: newUser })
        } catch (error) {
            console.log(error)
        }
    }
})
const getGoogleAccounts = async (req, res) => {
    res.status(200).json({ googleUser: await googleUsers.find({}) })
}
const loginGoogleAccount = aHandler(async (req, res) => {
    const { email_address } = req.body
    try {
        const doesExist = await googleUsers.findOne({ email_address })
        if (!doesExist) return res.status(404).json({ message: "User's not Found!" })
        return res.status(404).json({ user: doesExist })
    } catch (error) {
        console.log(error)
    }
})

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

// merge login, signup and auto google login

const loginAccount = async (req, res) => {
     const {mod,email,pass} = req.body
    try {
        //login existing account
        if(mod == 1) {
            return login()
        }
        res.status(400).json({message: "Bad request!!"})

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getUsers,
    login,
    signup,
    getUserDetails,
    getGoogleUserDetails,
    changePass,
    sendCode,
    confirmCode,
    deleteUser,
    cancelOrder,
    loadOrders,
    cancelledOrders,
    deletCancelled,
    resendCode,
    createGoogleAccount,
    getGoogleAccounts,
    loginGoogleAccount,
    loginAccount,
}