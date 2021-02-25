const userService = require('../service/user.service');
const errorCodes = require('../constant/errorCodes.enum');
const responseCodes = require('../constant/responseCodes.enum');
const responseMessages = require('../message/response.messages');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findAllUsers();

            res.json(users);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const { name } = req.params;
            const user = await userService.findUserByName(name);

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
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const { preferLang = 'en' } = req.body;

            await userService.deleteUser(userId);

            res.status(responseCodes.DELETED).json(responseMessages.USER_DELETED[preferLang]);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
