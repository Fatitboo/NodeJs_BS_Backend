const mongoose = require('mongoose');
const User = require('../models/userModel.js');
require('dotenv').config();
const connect = async()=>{
    await mongoose.connect(process.env.mongo_url);
    console.log('Connect to mongoDb successfully');       
}
const disconnect = async ()=>{
    mongoose.connection.close();
}
const findUser = async (obj)=>{
    User.findOne(obj);
}
const saveUser = async (newUser)=>{
    return await newUser.save();
}
module.exports = {connect, disconnect, findUser, saveUser};