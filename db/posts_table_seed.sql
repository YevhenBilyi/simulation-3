CREATE TABLE IF NOT EXISTS posts (
id SERIAL PRIMARY KEY,
title varchar(45),
img TEXT,
content TEXT,
author_id INTEGER  REFERENCES users(id))