const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
const port = 3000

app.use(cors())
app.use(bodyparser.json())

//routes
const user_route = require('./routes/user_routes')
app.use('/api',user_route)

const job_route = require('./routes/job_routes')
app.use('/api2',job_route)


// db
const mongoose = require('./db')




app.listen(port,()=>{
    console.log("app running ...")
})
