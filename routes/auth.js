const express = require('express')
const router1 = express.Router()
const path = require('path')

// Authentication middleware
function authenticate(req, res, next) {
    if (req.session && req.session.username) {
        // User is authenticated, allow access to the dashboard
        next();
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/auth/login');
    }
}

router1.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname , '../public/login.html'))
})

router1.post('/login', (req, res) => {
    if (req.body.username == req.body.password) {
        req.session.username=req.body.username;
        res.redirect('/user/dashboard')
    }
    else {
        res.redirect('/auth/login')
    }
})

// Protected dashboard route
router1.get('/dashboard', authenticate, (req, res) => {
    res.sendFile(path.join(__dirname , '../public/dashboard.html'))
})

module.exports=router1;
