const express = require('express');
const cors = require('cors');
const {connect} = require('../db/db.js')
const userRouter = require('../router/userRouter.js')
const bookRouter = require('../router/bookRouter.js')
const authorRouter = require('../router/authorRouter.js')
const app = express();

// use middleware to form our contract for incoming json payload ONLY
app.use(express.json());
// use middleware for url encoding
app.use(express.urlencoded({ extended: true }));
// use middleware to handle cors policy
app.use(cors());

app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Service is up'
    })
});
//route
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/authors', authorRouter);

// bad request err or url we can handler with middlerware
app.use((req, res, next)=>{
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next)=>{
    res.status(error.status||500).json({
        error:{
            message: error.message,
            status: error.status
        }
    });
});
connect();

module.exports = app