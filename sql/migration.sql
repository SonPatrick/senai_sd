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
    user_fullname VARCHAR(255) NOT NULL UNIQUE,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_pass VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

-- Cria a tabela de tipos de tarefas
CREATE TABLE IF NOT EXISTS types(
    type_id SERIAL PRIMARY KEY,
    type_description VARCHAR(255) NOT NULL UNIQUE, 
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT current_timestamp
);

-- Cria a tabela de prioridades
CREATE TABLE IF NOT EXISTS priorities(
	priority_id SERIAL PRIMARY KEY,
  priority_description VARCHAR(255) NOT NULL UNIQUE, 
  created_at DATE DEFAULT CURRENT_DATE
);


-- Cria a tabela de status
CREATE TABLE IF NOT EXISTS status(
	status_id SERIAL PRIMARY KEY,
  status_description VARCHAR(255) NOT NULL UNIQUE, 
  created_at DATE DEFAULT CURRENT_DATE
);

-- Cria a tabela de comentários no sistema
CREATE TABLE IF NOT EXISTS tasks_comments(
	tc_id SERIAL PRIMARY KEY,
  tc_task_id INT NOT NULL,
  tc_user_id INT NOT NULL,
  tc_comment TEXT NOT NULL,
  created_at DATE DEFAULT CURRENT_DATE,
  updated_at TIMESTAMP DEFAULT current_timestamp
);