'use strict';

const express = require('express');
const createError = require('http-errors');

const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/User');

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
  validationUpdate,
  validationPassword
} = require('../helpers/middlewares');

router.get('/me', isLoggedIn(), (req, res, next) => {
  res.json(req.session.currentUser);
});

router.post(
  '/login',
  isNotLoggedIn(),
  validationLoggin(),
  async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ email: username });
      if (!user) {
        next(createError(404));
      } else if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        return res.status(200).json(user);
      } else {
        next(createError(401));
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/signup',
  isNotLoggedIn(),
  validationLoggin(),
  async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username }, 'username');
      if (user) {
        return next(createError(422));
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ email: username, password: hashPass, completed: false });
        req.session.currentUser = newUser;
        res.status(200).json(newUser);
      }
    } catch (error) {
      next(error);
    }
  }
);

router.post('/logout', isLoggedIn(), (req, res, next) => {
  req.session.destroy();
  return res.status(204).send();
});

router.put(
  '/update',
  isLoggedIn(),
  validationUpdate(),
  async (req, res, next) => {
    const { name, birth, gender, weight, height, portion, IMC, GED } = req.body;
    const newInfo = { name, birth, gender, weight, height, portion, IMC, GED };
    const { id } = req.session.currentUser;
    try {
      await User.findByIdAndUpdate(id, newInfo);
      const newUser = await User.findById(id);
      req.session.currentUser = newUser;
      return res.status(200).json(newUser);
    } catch (error) {
      next(error);
    }
  });

router.put(
  '/change-password',
  isLoggedIn(),
  validationPassword(),
  async (req, res, next) => {
    const { password } = req.body;
    const { id } = req.session.currentUser;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
      await User.findByIdAndUpdate(id, { password: hashedPassword });
      const newUser = await User.findById(id);
      req.session.currentUser = newUser;
      return res.status(200).json(newUser);
    } catch (error) {
      next(error);
    }
  });

router.delete(
  '/delete',
  isLoggedIn(),
  async (req, res, next) => {
    const { id } = req.session.currentUser;
    try {
      await User.findByIdAndDelete(id);
      req.session.destroy();
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
