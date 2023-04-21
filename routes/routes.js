const controller = require("../controllers/controller");
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
      res.send(await controller.listarTarefasPaginadas(req.params.page));
    } catch (err) {
      res.status(404);
      console.error(`Erro ao criar a tarefa.`, err.message);
      next(err);
    }
  })
  .post("/criar/tarefa", async function (req, res, next) {
    try {
      res.status(200);
      res.json({ post: "criar tarefas" });
    } catch (err) {
      res.status(404);
      console.error(`Erro ao listar tarefas.`, err.message);
      next(err);
    }
  })
  .put("/atualizar/tarefa", async function (req, res, next) {
    try {
      res.status(200);
      res.json({ put: "atualizar tarefa" });
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
      res.json({ post: "Login usuário" });
    } catch (err) {
      res.status(404);
      console.error(`Erro ao logar.`, err.message);
      next(err);
    }
  });
//Exporta as informacoes
module.exports = router;
