require('dotenv').config();
const express = require('express');
const routes = require('./routes/index.routes');
const middlewares = require('./middlewares/index.middlewares.js');

const app = express();

app.use(express.json());
app.listen(3000, () => console.log('ouvindo porta 3000!'));
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routes.userRouter);
app.use('/login', routes.loginRouter);
app.use('/categories', routes.categoriesRouter);
app.use('/post', routes.blogPost);

app.use(middlewares.error);
