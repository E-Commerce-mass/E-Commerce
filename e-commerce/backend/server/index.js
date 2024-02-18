const express = require("express")
const cors = require('cors')
require('../database/model/SyncModels')
const userRoute = require('../routes/userRoute')
const productRoute= require ('../routes/productRoute')
const imageRoute = require('../routes/imageRoute')

const PORT = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '../../index.html'))

app.use('/user', userRoute)
app.use('/product',productRoute)
app.use('/image', imageRoute)

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
})