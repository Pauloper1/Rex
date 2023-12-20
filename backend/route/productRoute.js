const Product = require('../model/product')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    console.log('serach')
    const {page = 1, limit = 10} = req.query 

    const keyword = req.query.search ? {
        $or: [
            { title: { $regex: req.query.search, $options: 'i' } },
            { description: { $regex: req.query.search, $options: 'i' } },
            { price: { $regex: req.query.search, $options: 'i' } },

        ]
    } : {}

    const skip = (page - 1) * limit
    try{

        const searchData = await Product.find(keyword).skip(skip).limit(parseInt(limit))
        const totalDoc = searchData.length
        res.json({
            searchData,
            currenPage: page,
            totalPages: Math.ceil(totalDoc/page),
            totalItems: totalDoc
        })
    }catch(err){
        console.log('Error fetching products')
    }
})

module.exports = router