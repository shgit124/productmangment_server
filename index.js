require('dotenv').config()
require('./connection/connection')

const express = require('express')
const cors = require('cors')
const router = require('./Routes/route')
const path = require('path')


const app = express ()

app.use(cors())
app.use(express.json())
app.use(router)

app.use(
    '/bookimages',
    express.static(path.join(__dirname, 'bookimages'))
)



const PORT = 3000 || process.env.PORT

app.listen(PORT,()=>{
 console.log("server running at: ",PORT)

})