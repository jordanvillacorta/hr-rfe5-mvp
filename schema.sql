CREATE DATABASE mvp;

\c mvp;

CREATE TABLE IF NOT EXISTS meals (
  meal_id SERIAL PRIMARY KEY,
  category VARCHAR(200),
  meal_name VARCHAR(200),
  imageURL TEXT,
  originalURL TEXT
);

CREATE TABLE IF NOT EXISTS ingredients (
  ingredients_id SERIAL PRIMARY KEY,
  meal_id INT NOT NULL,
  quantity VARCHAR(100),
  name VARCHAR(100),
  type VARCHAR(100),
  CONSTRAINT fk_meal_id
    FOREIGN KEY(meal_id)
      REFERENCES meals(meal_id)
);

CREATE TABLE IF NOT EXISTS steps (
  steps_id SERIAL PRIMARY KEY,
  meal_id INT NOT NULL,
  step TEXT,
  CONSTRAINT fk_meal_id
    FOREIGN KEY(meal_id)
      REFERENCES meals(meal_id)
);

CREATE TABLE IF NOT EXISTS timers (
  timer_id SERIAL PRIMARY KEY,
  meal_id INT NOT NULL,
  time INT,
  CONSTRAINT fk_meal_id
    FOREIGN KEY(meal_id)
      REFERENCES meals(meal_id)
);