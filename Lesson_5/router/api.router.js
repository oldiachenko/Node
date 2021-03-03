const router = require('express').Router();

const { carRouter, userRouter } = require('./routers');

router.use('/users', userRouter);
router.use('/cars', carRouter);

module.exports = router;
