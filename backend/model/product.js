const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },
    category: {
        type: String
    },
    image: {
        type: String
    },
    sold: {
        type: Boolean
    },
    dateOfSale: {
        type: String
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product