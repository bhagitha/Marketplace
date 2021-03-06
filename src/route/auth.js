const express = require('express')
const router = express.Router();
const auth = require('../controller/auth')
const controller=require('../controller/controller')

router.post('/sendOTP', auth.login);
router.post('/verifyOTP', auth.verifyOTP);
router.post('/home', auth.authenticateUser, auth.home);
router.post('/refresh', auth.refresh)
router.get('/logout', auth.logout)

router.post('/addproduct',controller.addproduct);

module.exports = router
