

/**
 * Rota / Recurso
 * 
 * Métodos HTTP:
 * GET: buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar um informação no back-end
 * Delete: Deletar um informação do back-end
 * 
 * Tipos de parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros,paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 * 
 * Bancos de dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * *
 * Como comunicar com o  banco de dados:
 * 
 * Instalar driver: Select * From users
 * ou
 * Query Builder: table('users').select('*').where()
 * 
 */

const express = require('express')
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333)

