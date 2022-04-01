const express = require('express')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt-nodejs')
const nodemailer=require('nodemailer')
const users = require('../models/users')

//global variable
let Vcode=" "
let email=" "
//---------------

router.get('/', (req, res) => {res.send("From API router")});

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  
router.post('/login',async(req,res)=>{ 
    const {username,password} = req.body
    User.findOne({emailaddress:`${username}`}, function(err,user){
    if (err){return res.status(200).json({message:err})}
    if (!user){ return res.status(200).json({message:'No User Found'})}
    function async (err, user) {//hinde ko to mapagana 
        var comparePwd = async () => await bcrypt.compare(password, user.password)
        if (!comparePwd) {
          return res.status(200).json({message:'Wrong password'})
        }            
      }
    return res.status(200).json({message:`Welcome ${username}`,password:`your password : ${password}`})
    })
})


    router.post('/signup',async(req,res)=>{
        const {username,password,address} = req.body
        User.findOne({emailaddress:`${username}`}, function(err,user){
            if(err){return res.status(200).json({message:err})}
            if(user){return res.status(200).json({message:"the user is already taken",theUser:user})}
            else{
                var newUser= new User()
                newUser.username = `${username}`
                newUser.password = newUser.generateHash(`${password}`);
                newUser.save(function(err){
                    User.create({'emailaddress':`${username}`,'password':`${password}`,'address':`${address}`})
                    return res.status(200).json({
                        message:newUser
                    })
                })
            }
        })
    })
    router.post('/sendCode',async(req,res)=>{
        const {username}=req.body
        fd=between(0,10).toString()
        sd=between(0,10).toString()
        td=between(0,10).toString()
        pd=between(0,10).toString()
        Vcode=`${fd}${sd}${td}${pd}`
        User.findOne({emailaddress:`${username}`}, function(err,user){
            if (err){return res.status(200).json({message:err})}
            if (!user){ return res.status(200).json({message:'No User Found'})}
            var mail=nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user:'andreirogie67@gmail.com',
                    pass:'helloworld1982017790'
                }
            })
            var mailOptions={
                from:'andreirogie67@gmail.com',
                to:`${username}`,
                subject:'Reset password',
                text:Vcode
            }
            mail.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                    email=`${username}`
                  console.log('Email sent: ' + info.response);
                }
              });
            
            return res.status(401).json({message:Vcode})
        })
    })
    router.post('/changePassword',async(req,res)=>{
        const {newpassword,userCode,confirmpassword} = req.body;
        if(Vcode.length==0){return res.status(201).json({message:"Null"})}
        if(Vcode==`${userCode}`){
            if(`${newpassword}`==`${confirmpassword}`){
                const filter = { username: email };
                const update = { password: `${newpassword}`};
                await User.updateOne(filter, { password: `${newpassword}`});
                return res.status(201).json({message:'Password changed',user:email})}
            }
        return res.status(201).json({message:'not matched',code:Vcode})
    })
module.exports = router;