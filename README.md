
# Blogs API

## Descrição
Neste projeto foi arquitetado e desenvolvido uma API REST de um CRUD posts de blog (com o Sequelize). Começando pela API, foi desenvolvido alguns endpoints (seguindo os princípios do REST) que estarão conectados ao seu banco de dados.


  > Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post. 
  Também será necessário a utilização de categorias para seus posts 
  assim trabalhando a relação de posts para categorias e de categorias para posts.

### Endpoints 
  ```
    POST /user
    POST /login
    GET /user
    GET /user/:id
    POST /categories
    GET /categories
    POST /post
    GET /post
    GET post/:id
  ```

## Técnologias usadas

### Back-end:
 ```
  Desenvolvido usando: Node.js, Sequelize, Joi, JWT.
 ```

## Instalando Dependências

### Back-end
1. Entre no diretório do repositório e instale as dependências 
  * `npm install`

2. Crie o arquivo `.env` e adicione as variáves de ambiente
  * `HOSTNAME=seu_host`

  * `MYSQL_USER=seu_user_mysql`

  * `MYSQL_PASSWORD=sua_senha`

  * `JWT_SECRET=segredo_jwt`


3. Certifique-se de ter o [MySQL](https://www.mysql.com/downloads/) instalado e em execução
 

## Executando aplicação

  1. Criando *banco de dados* 
  ```
    npx sequelize db:create
  ```

  2. Executando arquivos de *Migration*
  ```
    npx sequelize db:migrate
  ```

  3. Executando arquivos de *seeds*
  ```
    npx sequelize db:seed:all
  ```

  4. Iniciando API
  ```
    npm start
  ```