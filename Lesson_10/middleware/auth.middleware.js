const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');
const { constants } = require('../constant');
const { errorMessages } = require('../message');
const { oAuthService } = require('../service');

module.exports = {
    checkAccessToken: async (req, res, next) => {
        try {
            const { preferLang = 'en' } = req.body;
            const access_token = req.get(constants.AUTHORIZATION);

            if (!access_token) {
                throw new Error(errorMessages.TOKEN_REQUIRED[preferLang]);
            }

            jwt.verify(access_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error(errorMessages.TOKEN_NOT_VALID[preferLang]);
                }
            });
            const tokens = await oAuthService.findToken({ access_token }).populate('user');

            if (!tokens) {
                throw new Error(errorMessages.TOKEN_NOT_VALID[preferLang]);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
