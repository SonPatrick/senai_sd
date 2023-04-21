function loginUsuario(model){
    return `SELECT user_id, user_fullname, user_email, user_pass
    FROM users 
    WHERE user_email = '${model.email}' 
    AND user_pass = '${model.pass}';`
};

module.exports = {loginUsuario}