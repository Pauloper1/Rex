const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async(url)=>{
    try{
        const conn = await mongoose.connect(url)
        console.log(`Connection To MongoDB Established!`.green.underline)
    }catch(err){
        console.log(`Error connecting to MongoDB`.red.bold)
    }
}

module.exports = connectDB