const users = require('./users.joi');
const login = require('./login.joi');
const categorie = require('./categorie.joi');
const post = require('./post.joi');

module.exports = {
  users,
  login,
  categorie,
  post,
};