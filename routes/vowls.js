'use strict';

const express = require('express');

const router = express.Router();

const Vowl = require('../models/Vowl');
const User = require('../models/User');

const {
  isLoggedIn,
  validationVowlSave
} = require('../helpers/middlewares');

router.get(
  '/all',
  isLoggedIn(),
  async (req, res, next) => {
    try {
      const userID = req.session.currentUser._id;
      const currentUser = await User.findById(userID).populate('vowls');
      const vowls = currentUser.vowls;
      console.log('From service all', vowls);
      res.json({ vowls });
    } catch (error) {
      next(error);
    }
  });

router.put(
  '/save',
  isLoggedIn(),
  validationVowlSave(),
  async (req, res, next) => {
    try {
      const userID = req.session.currentUser._id;
      const { cereal, protein, tuber, cruciferous, greens, othervegs, salsa } = req.body;
      const vowls = await Vowl.create({ cereal, protein, tuber, cruciferous, greens, othervegs, salsa, user: userID });
      console.log('From service save', vowls);
      res.json({ vowls });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;

// router.post('/matches/:matchID/delete', isNotLoggedIn, isMatchIdValid, async (req, res, next) => {
//   try {
//     const { matchID } = req.params;
//     if (!ObjectId.isValid(matchID)) {
//       next();
//     }
//     const match = await Match.findById(matchID);
//     if (!match) {
//       next();
//     }
//     await Match.findByIdAndDelete(matchID);
//     res.json({ message: 'Match deleted' });
//   } catch (error) {
//     next(error);
//   }
// });
