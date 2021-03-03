const { errorCodesEnum } = require('../constant');
const { models } = require('../dataBase/index');
const { errorMessages } = require('../message');
const { carValidators, idValidator } = require('../validators');

module.exports = {
    isSearchValid: (req, res, next) => {
        try {
            const { error } = carValidators.searchCarValidator.validate(req.query);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    isCarValid: (req, res, next) => {
        try {
            const { error } = carValidators.createCarValidator.validate(req.body);

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
            const { preferLang } = req.body;
            const { _id } = req.params;

            const { error } = idValidator.validate(_id);

            const carById = models.carModel.findById(_id);

            if (!carById) {
                throw new Error(errorMessages.CAR_DOESNOT_EXIST[preferLang]);
            }

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};
