/**
 * Author: Patrick J. Macedo Viana
 * Date: 20/04/2023
 */
const timeout = require('connect-timeout');
let cookieParser = require('cookie-parser');
const migration = require('./migration');

const route_options = require("./routes/routes_options");
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

//Iniciando a criação/migração do banco de dados
migration.initMigration();

//Definindo o comportamento da API assim como seus componentes
app
  .use(cors())
  .use(helmet())
  .use(timeout('5s'))
  .use(haltOnTimedout)
  .use(express.json()) 
  .use(cookieParser())
  .use(morgan("combined"))
  .use('/test', express.static('test'))
  .use(express.urlencoded({ extended: false }))
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
app.use("/api", route_options);
app.use("/api", route);

//Manipulacao de erros
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.use(express.static(path.join(__dirname, 'public-flutter')));
console.log(path.join(__dirname, 'public-flutter'));

app.get("/", (_, res) => {
    res.sendFile(path.resolve(__dirname, "public-flutter/index.html"));
  });

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}

//DEFINIÇÃO DO APLICATIVO fLUTTER
let logger = require('morgan');
const flutter = express();

flutter.use(logger('dev'));
flutter.use(express.json());
flutter.use(express.urlencoded({ extended: false }));
flutter.use(cookieParser());
flutter.use(express.static(path.join(__dirname, 'public-flutter')));

flutter.listen(3000, () => {
    console.log(`Rodando o Flutter na porta  3000`);
});

module.exports = {app, flutter};