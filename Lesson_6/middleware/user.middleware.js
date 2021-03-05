const { errorCodesEnum } = require('../constant');
const { models } = require('../dataBase/index');
const { errorMessages } = require('../message');
const { idValidator, userValidators } = require('../validator');

module.exports = {
    isSearchValid: (req, res, next) => {
        try {
            const { error } = userValidators.searchUserValidator.validate(req.query);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    isIdValid: (req, res, next) => {
        try {
            const { preferLang = 'en' } = req.body;
            const { _id } = req.params;

            const { error } = idValidator.validate(_id);

            const userById = models.userModel.findById(_id);

            if (!userById) {
                throw new Error(errorMessages.USER_DOESNOT_EXIST[preferLang]);
            }

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
};
