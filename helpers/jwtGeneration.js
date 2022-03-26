const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '30min',
};

const SECRET = process.env.JWT_SECRET;

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);
