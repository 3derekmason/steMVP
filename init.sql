

-- CREATE DATABASE stemvp;

-- CREATE TABLE if not exists activities (
--   activity_id INT GENERATED ALWAYS AS IDENTITY,
--   title VARCHAR(50) UNIQUE NOT NULL,
--   description VARCHAR(500) NOT NULL,
--   length VARCHAR(50),
--   group_size VARCHAR(10),
--   category VARCHAR(20),
--   PRIMARY KEY(activity_id),
-- );

-- CREATE TABLE if not exists activity_count (
--   id INT GENERATED ALWAYS AS IDENTITY,
--   recent INT,
--   count INT,
--   PRIMARY KEY(id),
--   CONSTRAINT fk_activity FOREIGN KEY(recent) REFERENCES activities(activity_id)
-- );

CREATE TABLE activities (
  activity_id INT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(50) UNIQUE NOT NULL,
  description VARCHAR(500) NOT NULL,
  length VARCHAR(50),
  group_size VARCHAR(10),
  category VARCHAR(20),
  PRIMARY KEY(activity_id),
);

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Planet Sun Catchers',
         'Decorate coffee filters or pre-cut circles of wax paper with color droppers, paint, etc... Once dry, laminate and hang in the window!',
         '5-10 minutes',
         '2-4',
         'space');