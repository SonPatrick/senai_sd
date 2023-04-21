const task_ctrl = require("../controllers/options_controller");
const express = require("express");
const router = express.Router();

router  
  .get("/listar/prioridades", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await task_ctrl.buscarPrioridades());
    } catch (err) {
      res.status(404);
      console.error(`Erro ao criar a tarefa.`, err.message);
      next(err);
    }
  }).get("/listar/status", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await task_ctrl.buscarStatus());
    } catch (err) {
      res.status(404);
      console.error(`Erro ao criar a tarefa.`, err.message);
      next(err);
    }
  }).get("/listar/tipos", async function (req, res, next) {
    try {
      res.status(200);
      res.send(await task_ctrl.buscarTipos());
    } catch (err) {
      res.status(404);
      console.error(`Erro ao criar a tarefa.`, err.message);
      next(err);
    }
  })
//Exporta as informacoes
module.exports = router;
