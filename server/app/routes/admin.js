let express = require('express')
let router = express.Router()
let User = require('../models/user')

router.get('/all_bookings', (req, res) => {
    User.findOne({_id: req.session.passport.user }, (err, user) => {
        if (user) {
            if (user.role === 'admin') {
                return res.status(200).send({ userContent: 'you are a premium user' })
            } else {
                return res.status(403).send({
                    'status': 403,
                    'message': 'You are not an admin user'
                })
            }
        } else {
            return res.status(401).send({
                'status': 401,
                'message': 'You are not authenticated.'
            })
        }
    }
    )
})

router.get('/all_users', (req, res) => {
    User.findOne({_id: req.session.passport.user }, (err, user) => {
        if (user) {
            if (user.role === 'admin') {
                return res.status(200).send({ userContent: 'you are a premium user' })
            } else {
                return res.status(403).send({
                    'status': 403,
                    'message': 'You are not an admin user'
                })
            }
        } else {
            return res.status(401).send({
                'status': 401,
                'message': 'You are not authenticated.'
            })
        }
    }
    )
})

module.exports = router
