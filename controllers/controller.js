const database = require("../database/db_connection");
const queries = require("../database/queries");
const helper = require("../utils/helpers");

async function listarTarefasPaginadas(page) {
  const result = await database.consultar(queries.listarTarefasPaginadas(page));
  let status = 0;
  let message = "Nenhuma tarefa encontrada.";
  const data = helper.emptyOrRows(result);

  if (data) {
    status = 1;
    message = `resultados encontrados`;
  }
  return { status, message, data };
}

module.exports = { listarTarefasPaginadas };
