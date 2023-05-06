const express = require('express')
const router2 = express.Router()
const path = require('path')

router2.use((req, res, next) => {
  if (req.session.username) {
    next()
  } else {
    res.redirect('/auth/login')
  }
})

router2.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname , '../public/dashboard.html'))
})

router2.get('/order',(req,res)=>{
    res.sendFile(path.join(__dirname , '../public/order.html'))
})

router2.get('/payment',(req,res)=>{
    res.sendFile(path.join(__dirname , '../public/payment.html'))
})

router2.get('/logout',(req,res)=>{
    req.session.destroy(() => {
      res.redirect('/auth/login')
    })
})

module.exports = router2
