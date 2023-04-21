require("dotenv").config();

const database = {
  producao: {
    host: process.env.DB_HOST, //"localhost",
    user: process.env.DB_USER, //"root",
    pass: process.env.DB_PASS, //"",
    base: process.env.DB_NAME, //"iboardjs",
    port: process.env.DB_PORT
  },

  desenvolvimento: {
    host: "localhost",
    user: "root",
    pass: "",
    base: "iboardjs",
  },

  listPerPage: 10,
};

module.exports = database;