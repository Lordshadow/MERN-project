const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true, min: 0, default: 0 },
    ratings: [{ type: Number }],
    reviews: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, comment: String }],
    specifications: { type: Object },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
