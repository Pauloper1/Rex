const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const loadDB = require('./config/loadDB')
const app = express()
connectDB(process.env.MONGO_URL)
loadDB()


const productRoute = require('./route/productRoute')
const statRoute = require('./route/statRoute')
app.use('/api/product/',productRoute)
app.use('/api/stat',statRoute)




const PORT = 5000||process.env.PORT
const server = app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`.cyan)
})
