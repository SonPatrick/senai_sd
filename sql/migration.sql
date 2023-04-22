--Cria a tabela de tarefas
CREATE TABLE IF NOT EXISTS tasks(
    task_id SERIAL PRIMARY KEY,
    task_user_id INT NOT NULL,
    task_title VARCHAR(255) NOT NULL,
    task_description TEXT NOT NULL,
    task_type_id INT NOT NULL,
    task_priority_id INT NOT NULL,
    task_status_id INT NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    user_fullname VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_pass VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT current_timestamp
);
-- Insere o usuário FIESC NA BASE
INSERT INTO users (user_fullname, user_email, user_pass) VALUES ('FIESC', 'root@fiesc.com', 'fiesc');

INSERT INTO users (user_fullname, user_email, user_pass) VALUES ('SENAI', 'senai@fiesc.com', 'senai');

-- Cria a tabela de tipos de tarefas
CREATE TABLE IF NOT EXISTS types(
    type_id SERIAL PRIMARY KEY,
    type_description VARCHAR(255) NOT NULL, 
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

-- Insere tipos de chamados usados
INSERT INTO types (type_description)
VALUES('Incidente'), ('Solicitação de Serviço'), ('Melhorias'), ('Projetos');

-- Cria a tabela de prioridades
CREATE TABLE IF NOT EXISTS priorities(
	priority_id SERIAL PRIMARY KEY,
  priority_description VARCHAR(255) NOT NULL, 
  created_at DATE DEFAULT CURRENT_DATE
);

-- Insere os tipos de prioridades usados
INSERT INTO priorities (priority_description)
VALUES('Alta'), ('Média'), ('Baixa'), ('Sem Prioridade');

-- Cria a tabela de status
CREATE TABLE IF NOT EXISTS status(
	status_id SERIAL PRIMARY KEY,
  status_description VARCHAR(255) NOT NULL, 
  created_at DATE DEFAULT CURRENT_DATE
);

-- Insere os tipos de status usados
INSERT INTO status(status_description)
VALUES('Concluída'), ('Fechada'), ('Aberta');

-- Cria a tabela de comentários no sistema
CREATE TABLE IF NOT EXISTS tasks_comments(
	tc_id SERIAL PRIMARY KEY,
  tc_task_id INT NOT NULL,
  tc_user_id INT NOT NULL,
  tc_comment TEXT NOT NULL,
  created_at DATE DEFAULT CURRENT_DATE,
  updated_at TIMESTAMP DEFAULT current_timestamp
);