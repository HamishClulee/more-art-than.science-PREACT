let express = require('express')
let router = express.Router()
let passport = require('passport')
let UTIL = require('../../util/utils.js')
let User = require('../models/user')

// LOGIN ======================================================================
router.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') })
})
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}))

// SIGNUP =====================================================================
// router.get('/signup', (req, res) => {
//     res.render('signup.ejs', { message: req.flash('signupMessage') })
// })
// router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/',
//     failureFlash: true
// }))

// ADMIN / PROFILE ============================================================
router.get('/profile', UTIL.isLoggedIn, (req, res) => {
    res.render('profile.ejs', {
        user: req.user
    })
})

// LOGOUT =====================================================================
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})
// CHALLENGE ==================================================================
router.get('/api/session_challenge', UTIL.isLoggedIn, (req, res) => {
    res.status(200).send({
        'code': 'OK1',
        'message': 'welcome...'
    })
})

router.get('/api/admin_challenge', (req, res) => {
    // no user logged in return early
    if (!req.session.passport) {
        return res.status(401).send({
            'status': 401,
            'message': 'No user logged in.'
        })
    } else {
        User.findOne({ _id: req.session.passport.user }, (err, user) => {
            if (err) {
                return res.status(401).send({
                    'status': 401,
                    'message': 'You are not authenticated.'
                })
            }

            if (user) {
                if (user.role === 'admin') {
                    return res.status(200).send({ userContent: 'welcome to the terradome, Max!' })
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
        })
    }
})

module.exports = router
