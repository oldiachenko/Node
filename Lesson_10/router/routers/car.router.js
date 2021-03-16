const router = require('express').Router();

const { carController } = require('../../controller');
const { carMiddlewares } = require('../../middleware');

router.get('/', carMiddlewares.isSearchValid, carController.getCars);

router.get('/:_id', carMiddlewares.isIdValid, carController.findCarById);

router.post('/', carMiddlewares.isCarValid, carController.createCar);

router.delete('/:_id', carMiddlewares.isIdValid, carController.deleteCar);

module.exports = router;
