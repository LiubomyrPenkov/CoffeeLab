const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    type: { type: String, required: true, enum: ['coffee', 'tea', 'sweats'] },
    name: { type: String, required: true},
    ingredients: { type: [String], required: true } ,
    prices: {
        s: String,
        m: String,
        l: String
    }
})

module.exports = mongoose.model('Product', productSchema, 'products');
