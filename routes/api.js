/*
Author  : C.RAJA ABINESH
Company : GSM PLUS INFOTECH
*/

const express = require('express');
import fileController from '../File/controller'

var router = express.Router();

//------------------Routes for Code-------------------/
router.get('/file/', fileController.getCode);
router.post('/file/', fileController.createCode);
//------------------Routes for Code-----------------/

module.exports = router;