
const aHandler = require('express-async-handler')
const ehandler = require('../middleWare/errorMiddleWare')
const User = require('../models/users')
const nodemailer = require("nodemailer");
const e = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { create, findOne } = require('../models/users');
const { text } = require('body-parser');



//get all uSer
const getUsers = aHandler(async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({
            users,
        })
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
// const generateHash = password =>{
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
//   }
// signup user

const signup = aHandler(async (req, res) => {
    const { email_address, customer_name, password, confirm_password, address, contact_no, } = req.body;

    const doesExist = await User.findOne({ email_address })

    if (doesExist) {
        return res.status(400).json({ error_message: "User already Taken! 😫" })
    }
    if (!(email_address, customer_name, password, confirm_password, address, contact_no)) {
        return res.status(403).json({ error_message: "Please provide all required information " })
    }
    if (!email_address) {
        return res.status(403).json({ error_message: "Missing email Address! " })
    }
    if (!customer_name) {
        return res.status(403).json({ error_message: "Missing name! " })
    }
    if (!address) {
        return res.status(403).json({ error_message: "Missing Address " })
    }
    if (!password) {
        return res.status(403).json({ error_message: "Missing password! " })
    }
    if (!confirm_password) {
        return res.status(403).json({ error_message: "Add confirm password! " })
    }
    if (!contact_no) {
        return res.status(403).json({ error_message: "Missing contact no. " })
    }

    const hashPassword = await bcrypt.hash(password, (await bcryptjs.genSalt(10)))

    if (password === confirm_password) {
        const newUser = await User.create({
            email_address: email_address,
            customer_name: customer_name,
            password: hashPassword,
            confirm_password: confirm_password,
            customer_address: address,
            contact_no: contact_no
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
    try {
        const userToDelete = await User.findById(req.params.id)
        if (!userToDelete) {
            return res
                .status(404)
                .json({ description: "User not Existing" })
        }
        await userToDelete.remove()
        res.json({ userDeleted: userToDelete.email_address })
    } catch (error) {
        res
            .status(404)
            .json({ Error: "User Id doesn't Exist" })
        throw new Error(error)
    }
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
                .json({ description: "Missing payload, please provide user id" });
        const userData = await User.findOne({ _id });
        if (!userData)
            return res
                .status(401)
                .json({ description: "User's Id is not Existing!" });

        return res.status(200).json({ userData });
    } catch (e) {
        ehandler(e, res);
    }
})
// router.post("/changePassword", async (req, res) => {
//     const { newpassword, userCode, confirmpassword } = req.body;
//     if (Vcode.length === 0) {
//         return res.status(201).json({ message: "Null" });
//     }
//     if (Vcode === `${userCode}`) {
//         if (`${newpassword}` === `${confirmpassword}`) {
          
//             const update = { password: `${newpassword}` };
//             await User.updateOne(filter, { password: User.generateHash(`${newpassword}`) });
//             return res.status(201).json({ message: "Password changed", user: email });
//         }
//     }
//     return res.status(201).json({ message: "not matched", code: Vcode });
// });


// const generateHash =async(newPass)=>{
//      return  await bcrypt.hash(newPass, (await bcrypt.genSalt(10)))   
// }

var Vcode = ""

const changePass = aHandler(async (req, res) => {

    const { email_address, code, newPassword, confirmPass,} = req.body

    const doesExist = await User.findOne({ email_address })

    if (!doesExist) {
        res.status(404)
        throw new Error("You can't proceed to changing password, This User's doesn't Exist!!")
    }
     const newPass = await bcrypt.hash(newPassword, (await bcrypt.genSalt(10)))
     try {
        if(code === `${Vcode}`){
            if(newPassword !== confirmPass){
               return res.status(400).json({message:"password Didn't Match"})
            }
            const filter = ({email_address: doesExist.email_address})
            await User.updateOne(filter, {$set:{password: newPass}})
            return res.status(200).json({password_change: doesExist.email_address})
        }
        else{
            return res.status(400).json({Error:"Invalid Code !"})
        }
     } catch (error) {
        console.log(error)
     }
})

function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const sendCode = aHandler(async (req, res) => {
    const { email_address, password} = req.body

    fd = between(0, 10).toString();
    sd = between(0, 10).toString();
    td = between(0, 10).toString();
    pd = between(0, 10).toString();
    Vcode = `${fd}${sd}${td}${pd}`;

    const doesExist = await User.findOne({email_address})
    if(!doesExist) return res.status(404).json({message: "user not found"})
    
    if((await bcrypt.compare(password, doesExist.password))){
        try {
            var email = nodemailer.createTransport({
                service: "gmail",
                auth:{
                    user: "bakingdjoyof@gmail.com",
                    pass: "yjaynxxkaaiamysz",
                },
            })
            var mailOptions = {
                from: "bakingdjoyof@gmail.com",
                to: `${email_address}`,
                subject:'Reset Password',
                text: Vcode
            }
    
            email.sendMail(mailOptions, (err, info)=>{
                    if(err){
                        console.log(err)
                    }else{
                        res.status(200).json({email_sent_to: Vcode })
                    }
            })
        } catch (error) {
            res.status(400).json({error})
        }
    }else{
        res.status(400).json({message:"password didn't Match!!"})
    }
 
})

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}
module.exports = {
    getUsers,
    login,
    signup,
    getUserDetails,
    deleteUser,
    changePass,
    sendCode,
}