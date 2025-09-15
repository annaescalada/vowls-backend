import { Router } from 'express';
import createError from 'http-errors';
import bcrypt from 'bcrypt';
import User from '../models/User';
import {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
  validationUpdate,
  validationPassword
} from '../helpers/middlewares';

const router = Router();
const saltRounds = 10;

router.get('/me', isLoggedIn(), async (req: any, res, next) => {
  const userID = req.session.currentUser._id;
  try {
    const updatedUser = await User.findById(userID).populate('vowls');
    req.session.currentUser = updatedUser;
  } catch (error) {
    next(error);
  }
  res.json(req.session.currentUser);
});

router.post('/login', isNotLoggedIn(), validationLoggin(), async (req: any, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ email: username });
    if (!user) {
      return next(createError(404));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      req.session.currentUser = user;
      return res.status(200).json(user);
    } else {
      return next(createError(401));
    }
  } catch (error) {
    next(error);
  }
});

router.post('/signup', isNotLoggedIn(), validationLoggin(), async (req: any, res, next) => {
  const { username, password } = req.body;
  try {
    // ...existing code...
  } catch (error) {
    next(error);
  }
});

export default router;
