const { Categories } = require('../models');

const createCategories = async (req, res, next) => {
  try {
    const newCategorie = await Categories.create(req.body);
    return res.status(201).json({ id: newCategorie.id, name: newCategorie.name });
  } catch (error) {
    next(error);
  }
};

const getAllCategories = async (_req, res, next) => {
    try {
      const allCategories = await Categories.findAll();
      
      return res.status(200).json(allCategories);
    } catch (error) {
      next(error);
    }
  };

module.exports = {
  createCategories,
  getAllCategories,
};