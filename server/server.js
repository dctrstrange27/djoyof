require("dotenv").config();
const express=require('express')
const server=express()
const session = require ('express-session');
const bodyParser=require('body-parser')
const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const mongoose = require('mongoose')

require("./config/database").connect();

const { PORT } = process.env || 6000

const cors = require('cors')

server.use(cors({origin:"*"}))
server.use(express.json())
server.use (
    session ({secret: 'borkar.amol', saveUninitialized: false, resave: false})
  );
server.use(cors())
server.use(bodyParser.json())
server.use(express.urlencoded({extended: false}))
server.use(passport.initialize ());
server.use(passport.session ());


server.use('/api',require('./API/api'))
server.use('/user',require('./Routers/userRouter'))



server.listen(PORT,(err)=>{
    console.log(`Server is running on port: ${PORT}`)
})