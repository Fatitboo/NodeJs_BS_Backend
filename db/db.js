const mongoose = require('mongoose');
require('dotenv').config();
const connect = async()=>{
    await mongoose.connect(process.env.mongo_url);
    console.log('Connect to mongoDb successfully');       
}
module.exports = {connect};