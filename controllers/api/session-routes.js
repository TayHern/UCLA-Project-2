const router = require('express').Router();
const { Session } = require('../../models');

// CREATE new sesion
router.post('/', async (req, res) => {
  try {
    const dbSessionData = await Session.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

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
