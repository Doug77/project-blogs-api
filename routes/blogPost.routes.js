const express = require('express');
const middlewares = require('../middlewares/index.middlewares');
const controllers = require('../controllers/index.controllers');
const schema = require('../schemas/index');

const route = express.Router();

route.post('/',
  middlewares.validtoken,
  middlewares.validate(schema.post),
  controllers.createPost);

route.get('/', middlewares.validtoken, controllers.getPosts);

route.get('/:id', middlewares.validtoken, controllers.getPostById);

route.put('/:id', middlewares.validtoken, middlewares.validate(schema.post));

module.exports = route;