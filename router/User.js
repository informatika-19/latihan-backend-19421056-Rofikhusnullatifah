const router = require('express').Router()
const userController = require('../controller/User')

router.post('/register', (req, res) => {
    console.log(req.body)
    userController.register(req.body)
    .then(result => {
        res.json(result)
    }).catch(err) => {
        res.json(err)
    })
    })

    module.export = router