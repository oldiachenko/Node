const Joi = require('joi');

module.exports = Joi.object({
    model: Joi.string().alphanum().min(1),
    price: Joi.number().min(0)
});
