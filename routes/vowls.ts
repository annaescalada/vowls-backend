import { Router } from 'express';
import Vowl from '../models/Vowl';
import mongoose from 'mongoose';
import {
  isLoggedIn,
} from '../helpers/middlewares';

const router = Router();
const ObjectId = mongoose.Types.ObjectId;

router.get('/getOne/:id', isLoggedIn(), async (req, res, next) => {
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
});

export default router;
