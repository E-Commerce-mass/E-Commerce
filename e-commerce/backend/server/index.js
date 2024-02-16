const express = require("express")
const cors = require('cors')
require('../database/model/SyncModels')
const userRoute = require('../routes/userRoute')
const categoriesRoute=require('../routes/categoriesRoute')
const PORT = 8080
const app = express()
const productrouter=require("../routes/productroute")
const imagerouter=require("../routes/imageroute")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '../../index.html'))


app.use('/user', userRoute)
app.use('/categories',categoriesRoute)
app.use('/token', authorRoute)
app.use("/product",productrouter)
app.use("/image",imagerouter)

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
})