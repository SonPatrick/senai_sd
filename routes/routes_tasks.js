const task_ctrl = require("../controllers/task_controller");
const express = require("express");
const router = express.Router();

router
  .get("/get", (req, res) =>
    res.json({
      status: 1,
      message: "GET: O serviço está funcionando normalmente",
    })
  )
  .get("/listar/tarefas/:page", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await task_ctrl.listarTarefasPaginadas(req.params.page));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao criar a tarefa.`, err.message);
      next(err);
    }
  })
  .post("/criar/tarefa/:id", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await task_ctrl.cadastrarTarefa(req.params.id, req.body));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao listar tarefas.`, err.message);
      next(err);
    }
  })
  .post("/comentar/tarefa/:id", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await task_ctrl.comentarTarefa(req.params.id, req.body));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao comentar tarefas.`, err.message);
      next(err);
    }
  })
  .get("/listar/comentario/:id", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await task_ctrl.listarComentariosTarefas(req.params.id));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao criar a tarefa.`, err.message);
      next(err);
    }
  })
  .put("/atualizar/tarefa/:id_task", async function (req, res, next) {
    try {
      res.status(200);
      res.json(await task_ctrl.atualizarTarefa(req.params.id_task, req.body));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao atualizar tarefa.`, err.message);
      next(err);
    }
  });
  
module.exports = router;
