const express = require('express');
const controllers = require('../controllers/index.controllers');
const middlewares = require('../middlewares/index.middlewares');
const schema = require('../schemas/index');

const router = express.Router();

router.post('/',
  middlewares.validtoken,
  middlewares.validate(schema.categorie),
  controllers.createCategories);

router.get('/', middlewares.validtoken, controllers.getAllCategories);

module.exports = router;
