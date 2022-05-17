const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados: process.env.DATABASE_URL 
const pool = new Pool({
  connectionString: "postgres://postgres:changeme@localhost:5432/postgres",
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};