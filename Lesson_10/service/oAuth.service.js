const { models: { O_AuthModel } } = require('../dataBase');
require('../dataBase/model/User');

module.exports = {
    createTokens: (tokenObject) => O_AuthModel.create(tokenObject),

    findToken: (token) => O_AuthModel.findOne(token)
};
