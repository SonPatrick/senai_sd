const Pool = require("pg").Pool;
const config = require("../config/configs");

const pool = new Pool({
  user: `${config.producao.user}`,
  host: `${config.producao.host}`,
  database: `${config.producao.base}`,
  password: `${config.producao.pass}`,
  port: config.producao.port,
});

async function consultar(query) {
  try {
    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { consultar };
