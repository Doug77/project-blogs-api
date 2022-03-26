const jwt = require('jsonwebtoken');
const { BlogPosts, Categories, PostsCategories, Users } = require('../models');

const decoded = (token) => {
  const myToken = jwt.verify(token, process.env.JWT_SECRET);
  return myToken.data;
};

const userEmail = async (email) => {
  const user = await Users.findOne({ where: { email } });
  return user.dataValues.id;
};

const createPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;

  try {
    const allCategories = await Categories.findAll();
    const categoriesIds = allCategories.map(({ id }) => id);
    const categoriesExist = categoryIds.every((id) => categoriesIds.includes(id));

    if (!categoriesExist) return res.status(400).json({ message: '"categoryIds" not found' });

    const userId = await userEmail(decoded(token).email);
    const newPost = await BlogPosts.create({ title, content, userId });

    await Promise.all(categoryIds
      .map((categorie) => PostsCategories.create({ postId: newPost.id, categoryId: categorie })));

    return res.status(201).json(newPost.dataValues);
  } catch (error) {
    next(error);
  }
};

const getPosts = async (_req, res, next) => {
  try {
    const allPosts = await BlogPosts.findAll({
      include: [{
        model: Users,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Categories,
        as: 'categories',
        attributes: { exclude: ['PostsCategories'] },
      }],
    });

    return res.status(200).json(allPosts);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await BlogPosts.findOne({ where: { id },
      include: [
        { model: Users, as: 'user' },
        { model: Categories, as: 'categories' },
      ],
    });

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};