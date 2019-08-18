'use strict';

const express = require('express');

const router = express.Router();

const Food = require('../models/Food');

const {
  isLoggedIn
} = require('../helpers/middlewares');

router.get(
  '/all',
  isLoggedIn(),
  async (req, res, next) => {
    try {
      const foods = await Food.find();
      res.json({ foods });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
