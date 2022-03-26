const joi = require('joi');

module.exports = joi.object({
  name: joi.string().empty().required().messages({
    'string.empty': '400|"name" is required',
    'any.required': '400|"name" is required',
  }),
});
