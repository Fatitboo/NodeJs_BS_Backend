let { findUser, saveUser  } = require("../db/db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const errorTemplate = require("../templates/errorTemplate.js");
const User = require('../models/userModel.js');
const mongoose = require('mongoose');
const successTemplate = require("../templates/succesTemplate.js");
const messages = require("../messages/messages.js");

exports.registerUser = async (req, res) => {
    try {
        console.log(req.body)
        const registerUser = await findUser({ email: req.body.email });
        if (registerUser) {
            throw new Error('User existed. Please logging in');
        }
        else {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });
            
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
            saveUser(user).then(
                user =>{
                    return res.status(201).json({
                        message: 'Register user successfully',
                        user: user
                    })
                }
            ).catch(err=>{
                throw new Error(err.message);
            }); 
                  
        }
    } catch (err) {
        return errorTemplate(res, err, err.message);
    }
}

exports.loginUser = async (req, res) => {
    try {
        const user = await findUser({ email: req.body.email });
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                user.password = "not show"
                const token = jwt.sign({ user: user }, process.env.jwt_secret);
                return successTemplate(res, user, "login successfully",201, true, token)
                
            } else {
                throw new Error('Authentication failed: Email or password does not match.')
            }
        } else {
            throw new Error('Authentication failed: Unable find user')
        }
    }
    catch (err) {
        return errorTemplate(res, err, err.message);
    }
}