const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('berhasil konek ke database')
}).catch((e) => {
    console.log(e)
    console.log('gagal konek ke database')
})
app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
  res.send('Username Anda' + req.params.username)
})
app.get('/', (req, res) => {
  res.send('Hello Word')
})
app.get('/daerah/:namadaerah/:id', (req, res) => {
    console.log(req.params)
    const namaDaerah = reg.params.namadaerah
    const idDaerah = reg.params.id
  res.send('Anda Di ' + namadaerah + ' ID Daerah = ' + idDaerah)
})
//app.post ('/register',(req, res) =>{
  //console.log (req.body)
  //  res.json(req.body)
//})
app.use('/user',require('./routes/user'))
app.use('/kegiatan',require('./routes/kegiatan'))

app.listen(4000,() => {
    console.log('Server Started')
})