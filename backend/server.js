const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
const loadDB = require('./config/loadDB')
const cors = require('cors')
const app = express()
connectDB(process.env.MONGO_URL)
loadDB()
app.use(cors())

const productRoute = require('./route/productRoute')
const statRoute = require('./route/statRoute')
app.use('/api/product/',productRoute)
app.use('/api/stat',statRoute)
app.get('/temp', (req, res)=>{
    res.json({
        Hello:"ehell"
    })
})

// const corsOption ={
//     origin: 'http://localhost:3000', // specify the allowed origin
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: false
// }



const PORT = 5000||process.env.PORT
const server = app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`.cyan)
})
