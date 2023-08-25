const express = require('express');
const calculatorController = require('../controllers/calculator');

const router = express.Router();

// calculator/add
router.post('/add', calculatorController.add);

router.post('/sub', calculatorController.sub);

router.post('/product', calculatorController.product);

router.post('/Division', calculatorController.Division);


module.exports = router;