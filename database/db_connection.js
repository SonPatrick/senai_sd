const postgres = require('pg').Pool
const config = require('../config/configs');

const pool = new postgres({
  user: `${config.producao.user}`,
  host: `${config.producao.host}`,
  database: `${config.producao.base}`,
  password: `${config.producao.pass}`,
  port: config.producao.port,
});

async function consultar(query){
    pool.query(query, (error, results) => {
        if (error) {
          throw error
        }
        return JSON.stringify(results.rows);
    });
}

module.exports = { consultar };