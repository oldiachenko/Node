const Joi = require('joi');

const { regexEnum } = require('../../constant');

const carsSubScheme = Joi.array().items(
    Joi.object({
        _id: Joi.string().required()
    })
);

module.exports = Joi.object({
    name: Joi.string().regex(regexEnum.NAME_REGEXP).min(2).max(50)
        .required(),
    email: Joi.string().regex(regexEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).required(),
    age: Joi.number().integer().min(6).max(120),
    car: Joi.boolean(),
    cars: carsSubScheme.when('car', { is: true, then: Joi.required() })
});
