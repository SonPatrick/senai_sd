const database = require('./database/db_connection');
const path = require("path");
const fs = require("fs");

/**
 * Método que lê o arquivo SQL de migração do banco
 */
async function initMigration(){
    let migration = fs.readFileSync(path.join(__dirname, "./sql/migration.sql"));
    await database.consultar(`${migration}`);
}

module.exports = {initMigration};