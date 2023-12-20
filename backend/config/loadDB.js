const Product = require('../model/product')
const alreadySeeded = require('./alreadySeeded')
const loadDB = async()=>{
    const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json')
    const data = await response.json()
    const seedChecker = await alreadySeeded()

    if(!seedChecker){
        try{
            const insertedData = await Product.insertMany(data)
            console.log('Database Seeded!')
        }catch(err){
            console.log(`Error in seeding Data: ${err.message}`.red.bold)
        }
    } else{
        console.log('Database already Seeded!')
    }

}

module.exports = loadDB