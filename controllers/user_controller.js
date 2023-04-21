const database = require("../database/db_connection");
const queries = require("../database/user_queries");
const helper = require("../utils/helpers");

async function loginUsuario(model) {
  const result = await database.consultar(queries.loginUsuario(model));
  console.log(JSON.stringify(result));
  let status = 0;
  let message = "Dados inválidos.";
  const data = helper.emptyOrRows(result);

  if (data.length > 0) {
    status = 1;
    message = `Bem vindo`;
  }
  return { status, message, data };
}

module.exports = { loginUsuario};
