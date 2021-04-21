BEGIN;

DROP TABLE IF EXISTS users, parks CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE parks (
  id SERIAL PRIMARY KEY,
  text_content TEXT,
  comment TEXT, 
  user_id INTEGER REFERENCES users(id)
);

INSERT INTO users (username) VALUES
  ('Sery1976');

  INSERT INTO parks (text_content, user_id) VALUES
  ('Battersea Park.', 1);

COMMIT;