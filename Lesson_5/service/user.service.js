const { models } = require('../dataBase');
require('../dataBase/model/Car');

module.exports = {
    getUsers: async (query) => {
        const users = await models.userModel.find(query);

        return users;
    },

    findUserById: async (userId) => {
        const user = await models.userModel.findById(userId);

        return user;
    },

    createUser: async (userObject) => {
        await models.userModel.create(userObject);
    },

    deleteUser: async (userId) => {
        await models.userModel.deleteOne(userId);
    }
};
