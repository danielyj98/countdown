const router = require('express').Router();
const {
  models: { Countdown }
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const countdowns = await Countdown.findAll();
    res.json(countdowns);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const countdown = await Countdown.create(req.body);
    console.log(req.body)
    res.status(201).send(countdown);
  } catch (error) {
    next(error);
  }
});
