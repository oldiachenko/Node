const router = require('express').Router();

const { userController } = require('../../controller');
const { userMiddlewares } = require('../../middleware');

router.get('/', userMiddlewares.isSearchValid, userController.getUsers);

router.get('/:_id', userMiddlewares.isIdValid, userController.findUserById);

router.post('/', userMiddlewares.isUserValid, userController.createUser);

router.delete('/:_id', userMiddlewares.isIdValid, userController.deleteUser);

module.exports = router;
