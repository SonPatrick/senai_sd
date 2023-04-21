require("dotenv").config();

const database = {
  producao: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    base: process.env.DB_BASE,
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