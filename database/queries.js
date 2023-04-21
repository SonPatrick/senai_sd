function buscarPorId(id){
    return `SELECT t.task_user_id, t.task_id, u.user_fullname, t.task_title, t.task_description, p.priority_description, tp.type_description, s.status_description, t.created_at
    FROM tasks t
        inner join users u ON u.user_id = t.task_user_id
      inner join priorities p ON p.priority_id = t.task_id
      inner join status s ON s.status_id = t.task_status_id
      inner join types tp ON tp.type_id = t.task_type_id
    WHERE t.task_user_id = ${id}
    ORDER BY t.created_at ASC`
};

module.exports = {buscarPorId}