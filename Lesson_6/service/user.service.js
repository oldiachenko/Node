const { models: { userModel } } = require('../dataBase');
require('../dataBase/model/Car');

module.exports = {
    getUsers: (query) => userModel.find(query),

    findUserById: (userId) => userModel.findById(userId),

    createUser: (userObject) => userModel.create(userObject),

    deleteUser: (userId) => userModel.deleteOne(userId)
};
