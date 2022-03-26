const { Users } = require('../models');
const jwtGenerator = require('../helpers/jwtGeneration');

const createUser = async (req, res, next) => {
  const { displayName } = req.body;

  const alreadyExists = await Users.findOne({ where: { displayName } });

  if (alreadyExists) return res.status(409).json({ message: 'User already registered' });

  try {
    const newUser = await Users.create(req.body);

    const token = jwtGenerator({ id: newUser.id, displayName });

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const allUsers = await Users.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userById = await Users.findOne({ where: { id } });
    if (!userById) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(userById);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
};
