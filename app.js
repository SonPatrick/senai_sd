const timeout = require('connect-timeout');
const route = require("./routes/routes");
const port = process.env.PORT || 5000;
const express = require("express");
process.env.TZ = "America/Belem";
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

//Definindo o comportamento da API assim como seus componentes
app
  .use(cors())
  .use(helmet())
  .use(timeout('5s'))
  .use(haltOnTimedout)
  .use(express.json()) 
  .use(morgan("combined"))
  .use('/test', express.static('test'))
  .use(express.urlencoded({ extended: true }))
  .use(
    morgan("combined", {
      stream: fs.createWriteStream(path.join(`${__dirname}/logs`, "access.log"), {flags: "a"}),
    })
  );

//Define a porta que a aplicacao vai rodar
app.listen(port, () => {
  console.log(`Rodando o servidor na porta ${port}`);
});

//Definindo a rota principal e apontando o gerenciador de rotas da API
app.use("/", route);

//Rota de verificacao que exibe o status da aplicacao
app
  .get("/get", (req, res) => res.json({ status: 1, message: "GET: O serviço está funcionando normalmente" }))
  .post("/post", (req, res) => res.json({ status: 1, message: "POST: O servriço está funcionando normalmente" }))
  .put("/put", (req, res) => res.json({ status: 1, message: "PUT: O serviço está funcionando normalmente" }))
  .patch("/patch", (req, res) => res.json({ status: 1, message: "PATCH: O serviço está funcionando normalmente" }))
  .delete("/delete", (req, res) => res.json({ status: 1, message: "DELETE: O serviço está funcionando normalmente" }));

//Manipulacao de erros
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}