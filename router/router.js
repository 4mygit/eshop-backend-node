const express = require('express');
const {login} = require('../controller/login');
const router = express.Router()
const apiPrefix = '/eshop-backend/api/v1/'


router.post(apiPrefix+'login',login);


module.exports=router;