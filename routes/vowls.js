'use strict';

const express = require('express');

const router = express.Router();

const Vowl = require('../models/Vowl');
const User = require('../models/User');

const {
  isLoggedIn,
  validationVowlSave
} = require('../helpers/middlewares');

router.post(
  '/save',
  isLoggedIn(),
  validationVowlSave(),
  async (req, res, next) => {
    try {
      const { name, description, cereal, protein, tuber, cruciferous, greens, othervegs, salsa } = req.body;
      const newVowl = await Vowl.create({ name, description, cereal, protein, tuber, cruciferous, greens, othervegs, salsa });

      const userID = req.session.currentUser._id;
      const currentUserVowls = req.session.currentUser.vowls;
      await User.findByIdAndUpdate(userID, { vowls: [...currentUserVowls, newVowl] });
      const updatedUser = await User.findById(userID).populate('vowls');

      req.session.currentUser = updatedUser;

      res.json({ updatedUser });
    } catch (error) {
      next(error);
    }
  });

router.delete(
  '/delete/:id',
  isLoggedIn(),
  async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    await Vowl.findByIdAndDelete(id);

    const userID = req.session.currentUser._id;
    const updatedUser = await User.findById(userID).populate('vowls');

    req.session.currentUser = updatedUser;

    res.json({ updatedUser });
    try {

    } catch (error) {
      next(error);
    }
  }
);

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
