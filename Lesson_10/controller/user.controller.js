const { errorCodesEnum, responseCodesEnum } = require('../constant');
const { passwordHasher } = require('../helper');
const { responseMessages } = require('../message');
const { userService } = require('../service');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await userService.getUsers(req.query);

            res.json(users);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    findUserById: async (req, res) => {
        try {
            const { _id } = req.params;

            const user = await userService.findUserById(_id);

            res.json(user);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;
            const { password } = req.body;

            const hashPassword = await passwordHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

            res.status(responseCodesEnum.CREATED).json(responseMessages.USER_CREATED[preferLang]);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;

            await userService.deleteUser(req.params);

            res.status(responseCodesEnum.DELETED).json(responseMessages.USER_DELETED[preferLang]);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
