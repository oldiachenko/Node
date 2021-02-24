const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:name', userMiddleware.checkIsNameValid, userController.getSingleUser);

router.post('/', userMiddleware.isUserValid, userController.createUser);

router.delete('/:userId', userMiddleware.isUserIdValid, userController.deleteUser);


module.exports = router;
