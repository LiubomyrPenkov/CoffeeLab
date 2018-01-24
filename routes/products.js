
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res, next)=>{
    Product.find((error, data)=>{
        if(error){
            res.status(400).json({
                'message': error.message
            })
        }else{
            res.status(200).json({
                'data': data
            })
        }
    })
})

module.exports = router;