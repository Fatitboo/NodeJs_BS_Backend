const express = require('express');
const router = express.Router();
router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'GET successfully',
        metadata:{
            hostname: req.hostname,
            method: req.method
        }
    })
});
router.get('/:id', (req, res, next)=>{
    res.status(200).json({
        message: 'GET by id user',
        metadata:{
            id: req?.params?.id
        }
    })
})
module.exports = router