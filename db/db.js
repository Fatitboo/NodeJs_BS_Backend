const mongoose = require('mongoose');
const User = require('../models/userModel.js');
require('dotenv').config();
const connect = async()=>{
    await mongoose.connect(process.env.mongo_url);
    console.log('Connect to mongoDb successfully');       
}
const disconnect = async ()=>{
    await mongoose.connection.close();
}
const findUser = async (obj)=>{
   return User.findOne(obj).exec();
}
const saveUser = async (newUser)=>{
    return await newUser.save();
}
module.exports = {connect, disconnect, findUser, saveUser};