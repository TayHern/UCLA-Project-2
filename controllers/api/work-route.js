const router = require('express').Router();
const sequelize = require('../../config/connections.js');
const { Workout, User, Session, Sesswork } = require('../../models');

//Get all workouts
router.get('/', (req, res) => {
    console.log('================================')
    Workout.findAll({
        attributes: [
        'workout_id', 
        'workout_name',
        'description',
        'difficulty'
    ],
    })
    .then(dbworkoutsData => res.json(dbworkoutsData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Create workout
router.post('/', (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Workout.create({
      workout_name: req.body.workout_name,
      workout_description: req.body.description,
      user_id: req.body.user_id
    })
      .then(dbworkoutsData => res.json(dbworkoutsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Update workout
router.put('/:id', (req, res) => {
    Workout.update(
      {
        workout_name: req.body.workout_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbworkoutsData => {
        if (!dbworkoutsData) {
          res.status(404).json({ message: 'No workout found with this id' });
          return;
        }
        res.json(dbworkoutsData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//Delete workout
router.delete('/:id', (req, res) => {
    Workout.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbworkoutData => {
        if (!dbworkoutData) {
          res.status(404).json({ message: 'No workout found with this id' });
          return;
        }
        res.json(dbworkoutData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
module.exports = router;