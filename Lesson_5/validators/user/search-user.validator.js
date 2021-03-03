const Joi = require('joi');

const { regexEnum } = require('../../constant');

module.exports = Joi.object({
    name: Joi.string().regex(regexEnum.NAME_REGEXP).min(2).max(50),
    email: Joi.string().regex(regexEnum.EMAIL_REGEXP),
    age: Joi.number().integer().min(6).max(120),
    car: Joi.boolean()
});
