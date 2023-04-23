function buscarTipos() {
    return `SELECT type_id, type_description FROM types order by type_id ASC`
};

function buscarPrioridades(){
    return `SELECT priority_id, priority_description FROM priorities order by priority_id ASC`;
}

function buscarStatus(){
    return `SELECT status_id, status_description FROM status Order by status_id ASC;`;
}

module.exports = { buscarTipos, buscarPrioridades, buscarStatus}