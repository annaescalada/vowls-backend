'use strict';

const createError = require('http-errors');

exports.isLoggedIn = () => (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    next(createError(401));
  }
};

exports.isNotLoggedIn = () => (req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    next(createError(403));
  }
};

exports.validationLoggin = () => (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next(createError(422));
  } else {
    next();
  }
};

exports.validationUpdate = () => (req, res, next) => {
  const { name, birth, gender, weight, height, portion, IMC, GED } = req.body;

  if (!name || !birth || !gender || !weight || !height || !portion || !IMC || !GED) {
    next(createError(422));
  } else {
    next();
  }
};

exports.validationPassword = () => (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    next(createError(422));
  } else {
    next();
  }
};
