BEGIN;

DROP TABLE IF EXISTS users, parks CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL
);

CREATE TABLE parks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  park_name TEXT,
  location VARCHAR(255)
);

CREATE TABLE park_comments (
id SERIAL PRIMARY KEY,
post_id INTEGER REFERENCES parks(id),
user_id INTEGER REFERENCES users(id),
text_content TEXT
);

INSERT INTO users (username) VALUES
  ('Michael'),
  ('Nafisa'),
  ('Evgeny'),
  ('Sevda');

  INSERT INTO parks (park_name, location, user_id) VALUES
  ('Battersea Park.', 'London, UK', 1),
  ('Hempstead Park.', 'London, UK', 2),
  ('Primrose Hill Park.', 'London, UK', 3),
  ('London Fields', 'London, UK', 4);


 INSERT INTO park_comments (post_id, user_id, text_content) VALUES
 (3, 2, 'Lovely time spent!'),
 (2, 1, 'Awesome! Definitely worth seeing'),
 (1, 3, 'Highly recommended!'),
 (4, 4, 'Great park and vibe!');

COMMIT
