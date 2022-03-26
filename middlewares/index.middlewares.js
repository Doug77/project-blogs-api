const error = require('./error.middlewares');
const validate = require('./validate.middlewares');
const validtoken = require('./validToken.moddlewares');

module.exports = {
  error,
  validate,
  validtoken,
};
