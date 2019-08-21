'use strict';

const express = require('express');

const router = express.Router();

const User = require('../models/User');

const {
  isLoggedIn
} = require('../helpers/middlewares');

router.put(
  '/save',
  isLoggedIn(),
  async (req, res, next) => {
    try {
      const { newMeals } = req.body;

      const userID = req.session.currentUser._id;

      await User.findByIdAndUpdate(userID, { meals: newMeals });

      const updatedUser = await User.findById(userID).populate('vowls');
      console.log(updatedUser);
      req.session.currentUser = updatedUser;

      res.json({ updatedUser });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
