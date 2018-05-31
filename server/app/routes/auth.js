let express = require('express')
let router = express.Router()
let passport = require('passport')
let UTIL = require('../../util/utils.js')
let User = require('../models/user')

router.get('/login', (req, res) => {
    res.render('login.ejs', { message: req.flash('loginMessage') })
})
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/account', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

// router.get('/auth/facebook', passport.authenticate('facebook', {
//     scope: ['public_profile', 'email']
// }))

// handle the callback after facebook has authenticated the user
// router.get('/auth/facebook/callback', passport.authenticate('facebook', {
//     successRedirect: '/',
//     failureRedirect: '/'
// }))

// GOOGLE =============================
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

// the callback after google has authenticated the user
// router.get('/auth/google/callback',
//     passport.authenticate('google', {
//         successRedirect: '/',
//         failureRedirect: '/'
//     })
// )

// SIGNUP =============================
router.get('/signup', (req, res) => {
    res.render('signup.ejs', { message: req.flash('signupMessage') })
})
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/account', // redirect to the secure profile section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))
router.get('/profile', UTIL.isLoggedIn, (req, res) => {
    res.render('profile.ejs', {
        user: req.user // get the user out of session and pass to template
    })
})

// router.get('/connect/local', function (req, res) {
//     res.render('connect-local.ejs', { message: req.flash('loginMessage') })
// })
// router.post('/connect/local', passport.authenticate('local-signup', {
//     successRedirect: '/profile', // redirect to the secure profile section
//     failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
//     failureFlash: true // allow flash messages
// }))

// facebook -------------------------------

// send to facebook to do the authentication
// router.get('/connect/facebook', passport.authorize('facebook', {
//     scope: ['public_profile', 'email']
// }))

// handle the callback after facebook has authorized the user
// router.get('/connect/facebook/callback',
//     passport.authorize('facebook', {
//         successRedirect: '/profile',
//         failureRedirect: '/'
//     }))

// google ---------------------------------
// router.get('/connect/google', passport.authorize('google', { scope: ['profile', 'email'] }))

// the callback after google has authorized the user
// router.get('/connect/google/callback',
//     passport.authorize('google', {
//         successRedirect: '/profile',
//         failureRedirect: '/'
//     }))

// LOGOUT ==============================
router.get('/logout', (req, res) => {
    console.log('REQ CAME TO LOGOUT')
    req.logout()
    res.redirect('/')
})
// CHALLENGE ==============================
router.get('/api/session_challenge', UTIL.isLoggedIn, (req, res) => {
    res.send('welcome...')
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
        })
    }
})

router.get('/api/get_user_from_session', (req, res) => {
    User.findOne({ _id: req.session.passport.user }, (err, user) => {
        if (!user && !err) {
            let userEmpty = {
                name: '',
                email: '',
                address: '',
                allergies: '',
                dietaryRequirements: '',
                phone: ''
            }
            return res.status(200).send(userEmpty)
        }
        if (user && !err) {
            let userClean = {
                id: user.id,
                name: UTIL.getNameFromUser(user),
                email: UTIL.getEmailFromUser(user),
                address: user.address,
                allergies: user.allergies,
                dietaryRequirements: user.dietaryRequirements,
                phone: user.phone
            }
            return res.status(200).send(userClean)
        } else {
            return res.status(502).send({
                'message': 'Cannot get that user!'
            })
        }
    })
})

router.get('/api/get_all_users', (req, res) => {
    User.findOne({ _id: req.session.passport.user }, (err, user) => {
            if (user && !err) {
                if (user.role === 'admin') {
                    User.find({}, (err, users) => {
                        if (err) {
                            return res.status(403).send({
                                'status': 502,
                                'message': 'Error returning users'
                            })
                        } else {
                            return res.status(200).send(users)
                        }
                    })
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
                }).redirect('/')
            }
        }
    )
})

module.exports = router
