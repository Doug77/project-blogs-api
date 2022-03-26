const express = require('express');
const controllers = require('../controllers/index.controllers');
const middlewares = require('../middlewares/index.middlewares');
const schema = require('../schemas/index');

const router = express.Router();

router.post('/', middlewares.validate(schema.users), controllers.createUser);
router.get('/', middlewares.validtoken, controllers.getAll);
router.get('/:id', middlewares.validtoken, controllers.getById);

module.exports = router;
