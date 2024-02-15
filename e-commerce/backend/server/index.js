const express = require("express")
const cors = require('cors')
require('../database/model/SyncModels')
const userRoute = require('../routes/userRoute')
const authorRoute = require('../routes/authorRoute')

const PORT = 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '../../index.html'))

app.use('/user', userRoute)
app.use('/token', authorRoute)

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`)
})