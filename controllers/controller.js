const database = require("../database/db_connection");
const queries = require("../database/queries");
const helper = require("../utils/helpers");

async function listarTarefas(id) {
  const result = await database.consultar(queries.buscarPorId(id));
    let status = 0;
  let message ="Nenhuma tarefa encontrada.";
  const data = helper.emptyOrRows(result);

  if (data) {
    status = 1;
    message = `resultados encontrados`;
  }
  return { status, message, data };
}

module.exports = {listarTarefas};