const router = require('express').Router();

const workoutRoutes = require('./work-route.js');

router.use('/workout', workoutRoutes);

module.exports = router;