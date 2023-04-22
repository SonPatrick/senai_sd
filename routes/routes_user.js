const user_ctrl = require("../controllers/user_controller");
const express = require("express");
const router = express.Router();

router
  .post("/criar/usuario", async function (req, res, next) {
    try {
      res.status(200);
      res.json(await user_ctrl.criarUsuario(req.body));
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
