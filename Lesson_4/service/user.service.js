const User = require('../dataBase/model/User');
require('../dataBase/model/Car');

module.exports = {
    getUsers: async (query) => {
        const users = await User.find(query);

        return users;
    },

    findUserById: async (userId) => {
        const user = await User.findById(userId);

        return user;
    },

    createUser: async (userObject) => {
        await User.create(userObject);
    },

    deleteUser: async (userId) => {
        await User.deleteOne(userId);
    }
};
