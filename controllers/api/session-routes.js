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

//put - update session
router.put('/:id', (req, res) => {
Session.update(
  {
    session_name: req.body.session_name
  },
  {
    where: {
      id: req.params.id
    }
  }
)
  .then(dbSessionData => {
    if (!dbSessionData) {
      res.status(404).json({ message: 'No session found with this id' });
      return;
    }
    res.json(dbSessionData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//get - get one session
router.get('/:id', (req, res) => {
  console.log('================================')
  Session.findAll({
      attributes: [
      'session_id', 
      'user_id',
      'workout_id',
      'date'
  ],
  })
  .then(dbSessionData => res.json(dbSessionData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

//delete - delete session
router.delete('/:id', (req, res) => {
  Session.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbSessionData => {
      if (!dbSessionData) {
        res.status(404).json({ message: 'No session found with this id' });
        return;
      }
      res.json(dbSessionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//put - add workout to session
router.put('/:id', (req, res) => {
  Session.update(
    {
      session_name: req.body.session_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbSessionData => {
      if (!dbSessionData) {
        res.status(404).json({ message: 'No sessions found with this id' });
        return;
      }
      res.json(dbSessionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//put - remove workout
router.put('/:id', (req, res) => {
  Session.update(
    {
      session_name: req.body.session_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbSessionData => {
      if (!dbSessionData) {
        res.status(404).json({ message: 'No sessions found with this id' });
        return;
      }
      res.json(dbSessionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
