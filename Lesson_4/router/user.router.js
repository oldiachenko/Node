const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userMiddleware.isNameValid, userController.getUsers);

router.get('/:_id', userMiddleware.isIdValid, userController.findUserById);

router.post('/', userMiddleware.isUserValid, userController.createUser);

router.delete('/:_id', userMiddleware.isIdValid, userController.deleteUser);

module.exports = router;
