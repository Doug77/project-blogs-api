const { createUser, getAll, getById } = require('./user.controllers');
const { loginUser } = require('./login.controllers');
const { createCategories, getAllCategories } = require('./categorie.controllers');
const { createPost, getPosts, getPostById } = require('./blogPost.controllers');

module.exports = {
  createUser,
  loginUser,
  getAll,
  getById,
  createCategories,
  getAllCategories,
  createPost,
  getPosts,
  getPostById,
};