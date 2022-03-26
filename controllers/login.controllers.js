const { Users } = require('../models');
const jwtGenerator = require('../helpers/jwtGeneration');

const loginUser = async (req, res, _next) => {
  const { email, password } = req.body;

  const alreadyExists = await Users.findOne({ where: { email } });

  if (!alreadyExists) return res.status(400).json({ message: 'Invalid fields' });

  const token = jwtGenerator({ email, password });

  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};