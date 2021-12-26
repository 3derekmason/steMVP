
-- -- DROP DATABASE IF EXISTS stemvp;

-- CREATE DATABASE stemvp;

-- \c stemvp;

CREATE TABLE activities (
  activity_id BIGSERIAL,
  title VARCHAR(50) UNIQUE NOT NULL,
  description VARCHAR(500) NOT NULL,
  length VARCHAR(50),
  group_size VARCHAR(10),
  category VARCHAR(20)
);

ALTER TABLE activities ADD CONSTRAINT activity_PK PRIMARY KEY (activity_id);

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Planet Sun Catchers',
         'Decorate coffee filters or pre-cut circles of wax paper with color droppers, paint, etc... Once dry, laminate and hang in the window!',
         '5-10 minutes',
         '2-4',
         'space');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Weave With Nature',
         'Just grab some sticks, twine, leaves, or flowers. See what kind of masterpieces you can make with nature objects.',
         '5-10 minutes',
         '1-5',
         'nature');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Feather Dance',
         'Put music on and blow feathers around in the air while dancing. Bonus if you dont let the feather touch the ground!',
         '2-3 minutes',
         'ANY',
         'music');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Ant Headbands',
         'Make headbands out of strips of paper, pipe cleaners (the antenna), and creativity! When finished, tape or fasten around any different sized heads...',
         '8-10 minutes',
         '1-3',
         'bugs');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Finger Painting',
         'Your fingers are your tools! Experiment with different textured painting surfaces as well as mixing colors',
         '2-3 minutes',
         '1-5',
         'art');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Wave Wall',
         'Experiment with waves in bins of water. Propel/ force varying intensity of waves while explorers use obstacles to block the path of the water and observe.',
         '5-10 minutes',
         '2-3',
         'ocean');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Fossile Dig',
         'Hide (preferrably skeletal) dino figures in the sandbox or sensory table and provide new archaeologists with exciting tools to explore and discover any surprises!',
         '10 minutes',
         '1-4',
         'dinosaurs');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Cocoa Mud Slime',
         'Mix 1 cup cornstarch with 1/2 cup water. Then add a few tablespoons of unsweetened cocoa powder to add color and smell. Mix, adding water until you reach desired sliminess.... BONUS GAME: Farm animals stuck in the mud.',
         '10-15 minutes',
         '1-2',
         'sensory');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Wings or No Wings',
         'Sort collections of bug toys whether they have wings or not. Why do some need wings? Can also be a large group activity one bug at a time!',
         '5 minutes',
         '1-2',
         'bugs');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Dandelion Seed Painting',
         'Paint desired background shape with desired color(s). Then assist with holding either the canvas or dandelion as the artist blows seeds onto the wet paint as decorations',
         '5 minutes',
         '',
         'art');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Frozen Egg Discovery',
         'Freeze dinos into egg shaped molds in diluted or colored water. Each group gets to explore the egg in a shallow bin of water with pipets as the excavate the mystery dino!',
         '10-15 minutes',
         '2-3',
         'dinosaurs');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Leaf Cutting Fine Motor',
         'Gather a variety of leaves for small groups to take turns inspecting and discussing while cutting with scissors.',
         '3-5 minutes',
         '2-4',
         'nature');

INSERT INTO activities (title, description, length, group_size, category)
VALUES  ('Shell Sorting',
         'Sort seashells! By color, size, likeness... Use pincers to add to fine motor. Also a great storytelling time...',
         '5-10 minutes',
         '',
         'ocean');

         -- psql -h localhost -d postgres -U derekmason -f ./init.SQL