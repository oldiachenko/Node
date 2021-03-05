const router = require('express').Router();

const { carRouter, userRouter, authRouter } = require('./routers');

router.use('/auth', authRouter);
router.use('/cars', carRouter);
router.use('/users', userRouter);

module.exports = router;
