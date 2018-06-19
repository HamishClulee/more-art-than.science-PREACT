let express = require('express')
let router = express.Router()
let Magnet = require('../models/Magnet')

router.get('/get-magnet', (req, res) => {
    Magnet.findOne({ hash: req.query.hash }, (err, magnet) => {
            if (magnet) {
                return res.status(200).send(magnet)
            } else {
                return res.status(401).send({
                    'status': 502,
                    'message': 'There is no magnet!'
                })
            }
        }
    )
})

router.get('/set-magnet', (req, res) => {
    new Magnet({
        hash: req.query.hash,
        message: req.query.message.split(',')
    }).save((err, done) => {
        if (!err) {
            return res.status(200).send('Yo')
        }
    })
})


module.exports = router
