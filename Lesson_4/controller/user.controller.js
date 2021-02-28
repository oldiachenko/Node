const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const responseCodes = require('../constant/responseCodes.enum');
const responseMessages = require('../message/response.messages');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await userService.getUsers(req.query);

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    findUserById: async (req, res) => {
        try {
            const { _id } = req.params;

            const user = await userService.findUserById(_id);

            res.json(user);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    createUser: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;

            await userService.createUser(req.body);

            res.status(responseCodes.CREATED).json(responseMessages.USER_CREATED[preferLang]);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { preferLang = 'en' } = req.body;

            await userService.deleteUser(req.params);

            res.status(responseCodes.DELETED).json(responseMessages.USER_DELETED[preferLang]);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
