const express = require('express');
const router = express.Router();
const motoController = require('../controllers/moto.controller');

router.get('/', motoController.getMotos);
router.post('/', motoController.createMoto);

module.exports = router;