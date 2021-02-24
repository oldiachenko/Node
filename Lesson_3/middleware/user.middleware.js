const errorCodes = require('../constant/errorCodes.enum');
const errorMessages = require('../message/error.messages');

module.exports = {
  checkIsNameValid: (req, res, next) => {
    try {
      const {preferLang = 'en'} = req.body;
      const name = req.params.name;
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
      const {name, password, email, preferLang = 'en'} = req.body;

      if (!name || !password || !email) {
        throw new Error(errorMessages.EMPTY_FIELD[preferLang]);
      }

      if (password.length < 6) {
        throw new Error(errorMessages.TOO_WEAK_PASSWORD[preferLang]);
      }

      next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },

  isUserIdValid: (req, res, next) => {
    try {
      const {preferLang = 'en'} = req.body;
      const userId = +req.params.userId;

      if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
        throw new Error(errorMessages.NOT_VALID_ID[preferLang]);
      }

      next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  }
}
