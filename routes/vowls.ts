import { Router, Response, NextFunction } from 'express';
import Vowl from '../models/Vowl';
import mongoose from 'mongoose';
import { isLoggedIn, validationLastSavedVowl, validationVowlSave } from '../helpers/middlewares';
import { AuthenticatedRequest } from './auth';
import User from '../models/User';

const router = Router();
const ObjectId = mongoose.Types.ObjectId;

router.get('/getOne/:id', isLoggedIn(), async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      next();
    }
    const vowl = await Vowl.findById(id).populate(
      'cereal protein tuber cruciferous greens othervegs salsa',
    );
    res.json({ vowl });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/save',
  isLoggedIn(),
  validationVowlSave(),
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { name, description, cereal, protein, tuber, cruciferous, greens, othervegs, salsa } =
        req.body;
      const newVowl = await Vowl.create({
        name,
        description,
        cereal,
        protein,
        tuber,
        cruciferous,
        greens,
        othervegs,
        salsa,
      });

      const userID = req.session.currentUser._id;
      await User.findByIdAndUpdate(userID, { $push: { vowls: newVowl } });
      const updatedUser = await User.findById(userID).populate('vowls');

      req.session.currentUser = updatedUser;

      res.json({ updatedUser });
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  '/last-vowl',
  isLoggedIn(),
  validationLastSavedVowl(),
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { cereal, protein, tuber, cruciferous, greens, othervegs, salsa } = req.body;
      const userID = req.session.currentUser._id;
      await User.findByIdAndUpdate(userID, {
        lastGeneratedVowl: { cereal, protein, tuber, cruciferous, greens, othervegs, salsa },
      });
      const updatedUser = await User.findById(userID).populate('vowls');

      req.session.currentUser = updatedUser;

      res.json({ updatedUser });
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/delete/:id',
  isLoggedIn(),
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        next();
      }
      await Vowl.findByIdAndDelete(id);

      const userID = req.session.currentUser._id;
      const updatedUser = await User.findById(userID).populate('vowls');

      req.session.currentUser = updatedUser;

      res.json({ updatedUser });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
