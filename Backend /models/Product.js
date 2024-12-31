const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    stock: { type: Number, required: true, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);