require("dotenv").config();

const database = {
  producao: {
    host: process.env.DB_HOST_PROD,
    user: process.env.DB_USER_PROD,
    pass: process.env.DB_PASS_PROD,
    base: process.env.DB_BASE_PROD,
    port: process.env.DB_PORT_PROD
  },

  desenvolvimento: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    base: process.env.DB_BASE,
    port: process.env.DB_PORT
  },

  listPerPage: 10,
};

module.exports = database;