const express = require('express');
const { findUser, saveUser } = require('../db/db.js');
const User = require('../models/userModel.js');
const  mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register',  (req, res, next) => {
    findUser({ email: req.body.email }).then(user => {
        if(user){
            return res.status(409).json({
                message: 'User existed. Please logging in'
            });
        }
        else{
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });
            console.log(user);
            bcrypt.hash(user.password, 10, (err, hash)=>{
                if(err){
                    return res.status(501).json({
                        message: "Error: "+err.message
                    })
                }
                else{
                    user.password=hash;
                    saveUser(user).then( user =>{
                        return res.status(201).json({
                            message: 'Register user successfully',
                            data: user
                        })
                    }).catch(err=>{
                        return res.status(501).json({
                            error: {
                                message: err.message,
                                status: err.status
                            }
                        })
                    });
                }
            })
        }
    }).catch(err => {
        return res.status(501).json({
            error: {
                message: err.message,
                status: "ccc"
            }
        })
    })
})
module.exports = router;