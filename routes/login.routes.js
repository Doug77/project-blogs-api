const express = require('express');
const controllers = require('../controllers/index.controllers');
const middlewares = require('../middlewares/index.middlewares');
const schema = require('../schemas/index');

const router = express.Router();

router.post('/', middlewares.validate(schema.login), controllers.loginUser);

module.exports = router;
