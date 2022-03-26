
# Blogs API

## Descrição
Neste projeto foi arquitetado e desenvolvido uma API REST de um CRUD posts de blog (com o Sequelize). Começando pela API, foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.


  > Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post. 
  Também será necessário a utilização de categorias para seus posts 
  assim trabalhando a relação de posts para categorias e de categorias para posts.

### Endpoints 
  ```
    1 - Endpoint POST /user
    2 - Endpoint POST /login
    3 - Endpoint GET /user
    4 - Endpoint GET /user/:id
    5 - Endpoint POST /categories
    6 - Endpoint GET /categories
    7 - Endpoint POST /post
    8 - Endpoint GET /post
    9 - Endpoint GET post/:id
  ```

## Técnologias usadas

### Back-end:
 ```
  Desenvolvido usando: Node.js, Sequelize, Joi, JWT.
 ```

## Instalando Dependências

### Back-end
  ```
  npm install
  ``` 
 
## Executando aplicação

* Para rodar o back-end:
  ```
   npx sequelize db:migrate
   
   npx sequelize db:seed:all
   
   npm start
  ```
