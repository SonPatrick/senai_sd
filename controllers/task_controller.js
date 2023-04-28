const database = require("../database/db_connection");
const queries = require("../database/task_queries");
const helper = require("../utils/helpers");

async function listarTarefasPaginadas(page) {
  const result = await database.consultar(queries.listarTarefasPaginadas(page));
  const total = await database.consultar(queries.listarTotalTarefas);
  console.log(total);

  let status = 0;
  let pages = 0;
  let message = "Nenhuma tarefa encontrada.";
  const data = helper.emptyOrRows(result);
  const totalData = helper.emptyOrRows(total);

  if (data) {
    status = 1;
    pages = parseInt((totalData.shift()).total);
    message = `resultados encontrados`;
  }
  return { status, pages, message, data };
}

async function cadastrarTarefa(id, model) {
  const result = await database.consultar(queries.cadastrarTarefa(id, model));
  let status = 0;
  let message = "Falha no cadastro da tarefa.";
  const data = helper.emptyOrRows(result);

  if (data) {
    status = 1;
    message = `Tarefa com o id ${JSON.stringify(data[0].task_id)} foi inserida com sucesso.`;
  }
  return { status, message };
}

async function atualizarTarefa(id_task, model) {
  const result = await database.consultar(queries.atualizarTarefa(id_task, model));
  let status = 0;
  let message = "Falha na atualização da tarefa.";

  if (result) {
    status = 1;
    message = `Tarefa Atualizada com sucesso.`;
  }
  return { status, message };
}

async function comentarTarefa(id_task, model) {
  const result = await database.consultar(queries.comentarTarefa(id_task, model));
  let status = 0;
  let message = "Falha ao adicionar comentário na tarefa.";
 
  if (result) {
    status = 1;
    message = `Comentado com sucesso.`;
  }
  return { status, message };
}

async function listarComentariosTarefas(id_task) {
  const result = await database.consultar(queries.listarComentariosTarefa(id_task));
 
  let status = 0;
  let message = "Nenhuma comentário no momento.";
  const data = helper.emptyOrRows(result);

  if (data.length > 0) {
    status = 1;
    message = `Comentários carregados.`;
  }
  return { status, message, data };
}

module.exports = { listarTarefasPaginadas, cadastrarTarefa, atualizarTarefa, comentarTarefa, listarComentariosTarefas };
