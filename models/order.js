const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var orderSchema = new Schema({
    items: [{type: Schema.Types.ObjectId, ref: 'Product', required: true}],
    done: {type: Boolean, default: false},
    customer: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    date: {type: Date, required: true}
})


module.exports = mongoose.model('Order', orderSchema, 'orders');