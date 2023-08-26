const express = require('express');
const usercontroller = require('../controllers/user');

const router = express.Router();
// /user/register
router.post('/register', usercontroller.register);

// /user/get
router.post('/get', usercontroller.get);

// /user/update
router.post('/update', usercontroller.update);

// /user/delete
router.post('/delete', usercontroller.delete);

module.exports = router;