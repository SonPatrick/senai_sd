const database = require("../database/db_connection");
const queries = require("../database/options_queries");
const helper = require("../utils/helpers");

async function buscarStatus() {
  const result = await database.consultar(queries.buscarStatus());
  const data = helper.emptyOrRows(result);
  return {data} ;
}

async function buscarPrioridades() {
    const result = await database.consultar(queries.buscarPrioridades());
    const data = helper.emptyOrRows(result);
    return {data} ;
}

async function buscarTipos() {
    const result = await database.consultar(queries.buscarTipos());
    const data = helper.emptyOrRows(result);
    return {data} ;
}

module.exports = { buscarStatus, buscarPrioridades, buscarTipos };
