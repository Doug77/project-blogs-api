const joi = require('joi');

module.exports = joi.object({
  displayName: joi.string().min(8).messages({
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  email: joi.string().email().required().messages({
    'string.email': '400|"email" must be a valid email',
    'any.required': '400|"email" is required',
  }),
  password: joi.string().length(6).required().messages({
    'string.length': '400|"password" length must be 6 characters long',
    'any.required': '400|"password" is required',
  }),
  image: joi.string().messages({}),
});
