function loginUsuario(model){
    return `SELECT user_id, user_fullname, user_email, user_pass
    FROM users 
    WHERE user_email = '${model.email}' 
    AND user_pass = '${model.pass}';`
};

function criarUsuario(model){
    return `INSERT INTO users (user_fullname, user_email, user_pass)
    VALUES('${model.fullname}', '${model.email}', '${model.pass}');`
};


module.exports = {loginUsuario, criarUsuario}