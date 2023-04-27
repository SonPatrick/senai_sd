function buscarTarefaPorId(id) {
  let offset = page > 1 ? (page - 1) * 10 : 0;
  return `SELECT t.task_user_id, t.task_id, u.user_fullname, t.task_title, t.task_description, p.priority_description, tp.type_description, s.status_description, t.created_at
    FROM tasks t
        inner join users u ON u.user_id = t.task_user_id
      inner join priorities p ON p.priority_id = t.task_id
      inner join status s ON s.status_id = t.task_status_id
      inner join types tp ON tp.type_id = t.task_type_id
    WHERE t.task_user_id = ${id}
    ORDER BY t.created_at ASC
    LIMIT 10 OFFSET ${offset}`;
}

const listarTotalTarefas = `SELECT ABS((SELECT COUNT(*) FROM tasks) / 10) + 1  as total`;

function listarTarefasPaginadas(page = 0) {
  let offset = page > 1 ? (page - 1) * 10 : 0;
  return `SELECT t.task_id, t.task_user_id, u.user_fullname, t.task_title, t.task_description, p.priority_description, tp.type_description, s.status_description, t.created_at
    FROM tasks t
        inner join users u ON u.user_id = t.task_user_id
        inner join priorities p ON p.priority_id = t.task_priority_id
        inner join status s ON s.status_id = t.task_status_id
        inner join types tp ON tp.type_id = t.task_type_id
    WHERE t.task_status_id !=2
    ORDER BY t.created_at ASC 
    LIMIT 10 OFFSET ${offset}`;
}

function cadastrarTarefa(id, model) {
  return `INSERT INTO tasks (task_user_id, task_title, task_description, task_type_id, task_priority_id, task_status_id)
    VALUES (${id}, '${model.task_title}', '${model.task_description}', ${model.task_type_id}, ${model.task_priority_id}, ${model.task_status_id})
    RETURNING task_id;`;
}

function atualizarTarefa(id_task, model) {
  return `UPDATE tasks 
            SET task_user_id = ${model.task_user_id}, 
                task_title = '${model.task_title}', 
                task_description = '${model.task_description}', 
                task_type_id = ${model.task_type_id}, 
                task_priority_id = ${model.task_priority_id}, 
                task_status_id = ${model.task_status_id}
            WHERE task_id = ${id_task};`;
}

module.exports = {
  buscarTarefaPorId,
  listarTarefasPaginadas,
  cadastrarTarefa,
  atualizarTarefa,
  listarTotalTarefas,
};
