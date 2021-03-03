const Car = require('../dataBase/model/Car');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../message/error.messages');

module.exports = {
    isCarValid: (req, res, next) => {
        try {
            const {
                model, price, preferLang = 'en'
            } = req.body;

            if (!model || !price) {
                throw new Error(errorMessages.EMPTY_FIELD[preferLang]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isIdValid: (req, res, next) => {
        try {
            const { preferLang } = req.body;
            const { _id } = req.params;

            const carById = Car.findById(_id);

            if (!carById) {
                throw new Error(errorMessages.CAR_DOESNOT_EXIST[preferLang]);
            }

            if (!_id || _id.length !== 24) {
                throw new Error(errorMessages.NOT_VALID_ID[preferLang]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
