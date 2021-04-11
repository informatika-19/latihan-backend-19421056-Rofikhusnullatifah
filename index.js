const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require ('cors')
const bodyParser = require('body-parser')

const mongoURL ='mongodb://localhost:27071/latihan'
mongoose.connect(mongoURL, {
    useCreateIndex: true,
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('berhasil connec kedatabase')
}).catch((err) => {
    console.log('gagal connec kedatabase')
})
app.use(cors())

app.use(bodyParser.json({
    extended : true,
    limit :'20mb'
}))

app.use(bodyParser.urlencoded({
    extended : true,
    limit: '20mb'
}))
//list router
app.use('/user', require('./router/user'))

app.listen(5000, function() {
    console.log('server telah dijalankan di port 5000')
})
