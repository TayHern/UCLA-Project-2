const router = require('express').Router();
const { Session } = require('../../models');

// CREATE new sesion
router.post('/', async (req, res) => {
  try {
    const dbSessionData = await Session.create({
      session_id: req.body.session_id,
      user_id: req.body.user_id,
      workout_id: req.body.workout_id,
      date: req.body.date,
    });

    req.session.save(() => {
      req.session.session_id = true;

      res.status(200).json(dbSessionData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//put - create new workout
router.put('/', async (req, res) => {
  try {
    const dbSessionData = 
  }
});

//get - get one session
router.get('/', async (req, res) => {

});

//delete - delete session
router.delete('/', async (req, res) => {

});

//put - add workout to session
router.put('/', async (req, res) => {

});

//put - remove workout
router.put('/', async (req, res) => {

});

module.exports = router;
