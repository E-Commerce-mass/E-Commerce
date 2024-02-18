const express = require("express")
const cors = require('cors')
require('../database/model/SyncModels')
const userRoute = require('../routes/userRoute')
const categoriesRoute=require('../routes/categoriesRoute')
const authorRoute = require('../routes/authorRoute')
const PORT = 8080
const app = express()
const productrouter=require("../routes/productroute")
const imagerouter=require("../routes/imageroute")
const favoritRoute = require('../routes/favoritRoute')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '../../index.html'))


app.use('/user', userRoute)
app.use('/categories',categoriesRoute)
app.use('/token', authorRoute)
app.use("/product",productrouter)
app.use("/image",imagerouter)
app.use('/favorit', favoritRoute)

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
})