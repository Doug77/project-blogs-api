const joi = require('joi');

module.exports = joi.object({
  title: joi.string().empty().required().messages({
    'string.empty': '400|"title" is required',
    'any.required': '400|"title" is required',
  }),
  content: joi.string().empty().required().messages({
    'string.empty': '400|"content" is required',
    'any.required': '400|"content" is required',
  }),
  categoryIds: joi.array().empty().required().messages({
    'array.empty': '400|"categoryIds" is required',
    'any.required': '400|"categoryIds" is required',
  }),
});
