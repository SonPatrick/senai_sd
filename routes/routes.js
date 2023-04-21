const task_ctrl = require("../controllers/task_controller");
const user_ctrl = require("../controllers/user_controller");
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
  .put("/atualizar/tarefa", async function (req, res, next) {
    try {
      res.status(200);
      res.json(await task_ctrl.atualizarTarefa(req.params.id, req.body));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao atualizar tarefa.`, err.message);
      next(err);
    }
  })
  .post("/criar/usuario", async function (req, res, next) {
    try {
      res.status(200);
      res.json({ post: "criar usuário" });
    } catch (err) {
      res.status(404);
      console.error(`Erro ao criar usuário.`, err.message);
      next(err);
    }
  })
  .post("/login/usuario", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await user_ctrl.loginUsuario(req.body));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao logar.`, err.message);
      next(err);
    }
  });
//Exporta as informacoes
module.exports = router;
