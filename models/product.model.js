const mongoose = require('mongoose');
const productSchema =  mongoose.Schema({
        SN: Number,
        productID: String,
        product: String,
        paymentType: String,
        amount: Number
    }, { timestamp: true });
module.export = mongoose.model('Product', productSchema);
