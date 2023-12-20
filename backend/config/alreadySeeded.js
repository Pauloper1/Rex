const Product = require('../model/product')
const alreadySeeded = async()=>{
    try{
        const count = await Product.countDocuments()
        return count > 0 ? true: false

    }catch(err){
        console.log(`Error in seed checker`.red.bold)
    }
}

module.exports = alreadySeeded