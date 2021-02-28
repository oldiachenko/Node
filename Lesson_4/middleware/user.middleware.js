const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../message/error.messages');

module.exports = {
    isNameValid: (req, res, next) => {
        try {
            const { preferLang = 'en' } = req.body;
            const { name } = req.query;
            const check = new RegExp(/^[a-z]+$/i);

            if (Number.isInteger(+name) || !check.test(name)) {
                throw new Error(errorMessages.NOT_VALID_NAME[preferLang]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isUserValid: (req, res, next) => {
        try {
            const {
                name, age, preferLang = 'en'
            } = req.body;

            const checkName = new RegExp(/^[a-z]+$/i);

            if (!name || !age) {
                throw new Error(errorMessages.EMPTY_FIELD[preferLang]);
            }

            if (!checkName.test(name)) {
                throw new Error(errorMessages.NOT_VALID_NAME[preferLang]);
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

            if (!_id || _id.length !== 24) {
                throw new Error(errorMessages.NOT_VALID_ID[preferLang]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
};
