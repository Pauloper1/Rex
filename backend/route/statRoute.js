const express = require('express')
const router = express.Router()
const Product = require('../model/product')


router.get('/all', async (req, res) => {
    try {
        const month = parseInt(req.query.month) || 3

        const BASE_API = 'http://localhost:5000'
        const result = await Promise.all([
            fetch(`${BASE_API}/api/stat/monthStat?month=${month}`),
            fetch(`${BASE_API}/api/stat/barchart?month=${month}`),
            fetch(`${BASE_API}/api/stat/piechart?month=${month}`)
        ])
        var a = await result[0].json()
        var b = await result[1].json()
        var c = await result[2].json()

        const combined = {
            monthStat: a,
            barchart: b,
            piechart: c
        }
        console.log(combined)
        res.json(combined)
    } catch (err) {
        console.log(`Error in All-route`)
    }
})

router.get('/piechart', async (req, res) => {
    console.log('piechart Route')
    try {
        const { month = 3 } = req.query
        const monthCon = {
            $expr: {
                $eq: [
                    { $month: '$dateOfSale' },
                    month
                ],
            }
        }
        const allProducts = await Product.find(monthCon)
        var categories = {}
        allProducts.forEach(product => {
            category = product['category']

            if (categories.hasOwnProperty(category)) {
                categories[category] += 1
            } else {
                categories[category] = 1
            }
        })
        res.json({
            categories
        })


    } catch (err) {
        console.log(`Error in piechart API ${err.message}`)
    }
})

router.get('/barchart', async (req, res) => {
    const { month = 3 } = req.query

    const monthCon = {
        $expr: {
            $eq: [
                { $month: '$dateOfSale' },
                month
            ],
        }
    }
    console.log('barchart Route')
    try {
        const allProducts = await Product.find(monthCon)
        // console.log(allProducts)
        var pRangeProduct = Array(10).fill(0);
        allProducts.forEach(product => {
            var price = product['price']
            // console.log(price)

            if (price <= 100) {
                pRangeProduct[0]++;
            } else if (price > 100 && price <= 200) {
                pRangeProduct[1]++;
            } else if (price > 200 && price <= 300) {
                pRangeProduct[2]++;
            } else if (price > 300 && price <= 400) {
                pRangeProduct[3]++;
            } else if (price > 400 && price <= 500) {
                pRangeProduct[4]++;
            } else if (price > 500 && price <= 600) {
                pRangeProduct[5]++;
            } else if (price > 600 && price <= 700) {
                pRangeProduct[6]++;
            } else if (price > 700 && price <= 800) {
                pRangeProduct[7]++;
            } else if (price > 800 && price <= 900) {
                pRangeProduct[8]++;
            } else if (price > 900) {
                pRangeProduct[9]++;
            } else {
                throw new Error('Invalid price range');
            }
        });
        console.log(pRangeProduct)
        res.json({
            pRangeProduct
        })
    } catch (err) {
        console.log(`Error ${err.message}`)
    }

})


router.get('/monthStat', async (req, res) => {
    console.log('Month stat Route')
    //Rather than getting all the products. Apply filter in the find method itself
    try {
        const month = req.query.month ? parseInt(req.query.month) : 3
        if (month < 1 || month > 12) {
            throw new Error(`Invalid month`)
        }
        var allProducts = await Product.find({})
        var soldCount = 0
        var notSold = 0
        var TotalSale = 0
        allProducts.forEach((item) => {
            const date = new Date(item['dateOfSale']).getMonth() + 1
            if (date == month) {
               
                if (item['sold']) {
                    soldCount++
                    TotalSale += item['price']
                    console.log(TotalSale)
                } else {
                    notSold++
                }

                return item
            }
        })
        // console.log(allProducts.length)
        res.json({
            TotalSale,
            soldCount,
            notSoldCount: notSold
        })

    } catch (err) {
        res.json({ message: err.message })
    }

})



module.exports = router