const joi = require('joi');

module.exports = joi.object({
  email: joi.string().empty().required().email()
    .messages({
    'string.empty': '400|"email" is not allowed to be empty',
    'any.required': '400|"email" is required',
  }),
  password: joi.string().empty().required()
    .messages({
    'string.empty': '400|"password" is not allowed to be empty',
    'any.required': '400|"password" is required',
  }),
});
