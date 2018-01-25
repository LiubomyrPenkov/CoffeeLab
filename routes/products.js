
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res, next)=>{
    Product.find((error, data)=>{
        if(error){
            res.status(500).json({
                'message': error.message
            })
        }else{
            res.status(200).json(data)
        }
    })
})

module.exports = router;