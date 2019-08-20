'use strict';

const express = require('express');

const router = express.Router();

const Vowl = require('../models/Vowl');
const User = require('../models/User');

var mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const {
  isLoggedIn,
  validationVowlSave,
  validationLastSavedVowl
} = require('../helpers/middlewares');

router.get(
  '/getOne/:id',
  isLoggedIn(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        next();
      }
      const vowl = await Vowl.findById(id)
        .populate('cereal protein tuber cruciferous greens othervegs salsa');

      res.json({ vowl });
    } catch (error) {
      next(error);
    }
  }
);

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

router.put(
  '/last-vowl',
  isLoggedIn(),
  validationLastSavedVowl(),
  async (req, res, next) => {
    try {
      const { cereal, protein, tuber, cruciferous, greens, othervegs, salsa } = req.body;
      const userID = req.session.currentUser._id;
      await User.findByIdAndUpdate(userID, { lastGeneratedVowl: { cereal, protein, tuber, cruciferous, greens, othervegs, salsa } });
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
    if (!ObjectId.isValid(id)) {
      next();
    }
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
