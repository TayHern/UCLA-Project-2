DROP TABLE IF EXISTS workouts;

CREATE TABLE workouts (
    workout_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    stroke_id STRING NOT NULL,
    duration TIME NOT NULL,
    difficulty INTEGER NOT NULL
)