const { mongo } = require('mongoose')
const Product = require('../model/product')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    console.log('serach')
    // const {page = 1, limit = 10, month = 3} = req.query 
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const month = parseInt(req.query.month) || 10


    console.log(isNaN(parseFloat(req.query.search)))
    console.log(month)
    const keyword = req.query.search ? {
        $or: [
            { title: { $regex: req.query.search, $options: 'i' } },
            { description: { $regex: req.query.search, $options: 'i' } },
            
        ]
    } : {}

    const priceVal = parseFloat(req.query.search)
    if(!isNaN(priceVal)){
        keyword.$or.push({price: priceVal })
    }


    // if (req.query.month) {
    //     // Convert month to a number and ensure it's a valid month (1-12)
    //     const month = parseInt(req.query.month, 10);
    //     if (!isNaN(month) && month >= 1 && month <= 12) {
    //       keyword.$or.push({
    //         dateOfSale: {
    //           $expr: {
    //             $eq: [{ $month: '$dateOfSale' }, month],
    //           },
    //         },
    //       });
    //     }
    //   }
  

    const skip = (page - 1) * limit
    try{
        const monthCon = {
            $expr: {
              $eq: [
                { $month: '$dateOfSale' }, 
                month
              ],
            }}
        const searchData = await Product.find(monthCon).find(keyword).skip(skip).limit(parseInt(limit))
        const totalDoc = searchData.length
        res.json({
            searchData,
            currenPage: page,
            totalPages: Math.ceil(totalDoc/limit),
            totalItems: totalDoc
        })
    }catch(err){
        res.json({
            message:`${err.message}`
        })
        console.log('Error fetching products')
    }
})

router.get('/month',async(req, res)=>{
    const month = req.query.month
    const prod = await Product.find({
        $expr: {
          $eq: [
            { $month: '$dateOfSale' }, 
            month
          ],
        },
      })
      res.json(prod)
      
})
module.exports = router