const router = require('express').Router();

const carController = require('../controller/car.controller');
const carMiddleware = require('../middleware/car.middleware');

router.get('/', carController.getCars);

router.get('/:_id', carMiddleware.isIdValid, carController.findCarById);

router.post('/', carMiddleware.isCarValid, carController.createCar);

router.delete('/:_id', carMiddleware.isIdValid, carController.deleteCar);

module.exports = router;
